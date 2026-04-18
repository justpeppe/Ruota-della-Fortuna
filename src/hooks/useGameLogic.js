import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Calcola lo stato iniziale di tutte le tessere di una matrice.
 * I caratteri speciali (spazi, punteggiatura) sono rivelati da subito.
 */
const buildInitialState = (matrix) => {
  const state = {};
  matrix.forEach((row, r) => {
    row.forEach((cell, c) => {
      if (cell.isActive) {
        const char = cell.char?.toUpperCase();
        state[`${r}-${c}`] = [' ', '-', '\'', ','].includes(char) ? 'revealed' : 'hidden';
      }
    });
  });
  return state;
};

/**
 * Hook per la logica core del gioco con animazione a cascata avanzata.
 * 
 * @param {Array} matrix - La matrice del tabellone (4x14)
 * @param {Function} onDing - Callback chiamata per ogni "ding" di illuminazione
 * @param {Function} onWrong - Callback chiamata quando una lettera è sbagliata
 */
export const useGameLogic = (matrix, onDing, onWrong) => {
  const [tileStates, setTileStates] = useState(() => buildInitialState(matrix));
  const [processedLetters, setProcessedLetters] = useState(new Set([' ', '-', '\'', ',']));
  const [isAnimating, setIsAnimating] = useState(false);
  const isAnimatingRef = useRef(false);

  const handleKeyPress = useCallback(async (event) => {
    if (isAnimatingRef.current) return;

    const key = event.key.toUpperCase();
    if (!/^[A-ZÀ-ÿ]$/.test(key)) return;
    if (processedLetters.has(key)) return;

    const targets = [];
    matrix.forEach((row, r) => {
      row.forEach((cell, c) => {
        if (cell.isActive && cell.char?.toUpperCase() === key) {
          targets.push({ r, c });
        }
      });
    });

    if (targets.length === 0) {
      if (onWrong) onWrong();
      return;
    }

    // Lettera corretta trovata, avvia animazione
    isAnimatingRef.current = true;
    setIsAnimating(true);
    setProcessedLetters(prev => new Set([...prev, key]));

    // --- FASE 1: Illuminazione Sequenziale (200ms per tessera) ---
    for (let i = 0; i < targets.length; i++) {
      const { r, c } = targets[i];
      setTileStates(prev => ({ ...prev, [`${r}-${c}`]: 'illuminated' }));
      if (onDing) onDing();
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    // Pausa prima del reveal
    await new Promise(resolve => setTimeout(resolve, 500));

    // --- FASE 2: Rivelazione a Cascata per Colonna (100ms tra colonne) ---
    const columns = [...new Set(targets.map(t => t.c))].sort((a, b) => a - b);

    for (let i = 0; i < columns.length; i++) {
      const colIndex = columns[i];
      // Raccogliamo i cambiamenti e li passiamo in un unica volta al setter
      setTileStates(prev => {
        const nextState = { ...prev };
        targets.forEach(t => {
          if (t.c === colIndex) {
            nextState[`${t.r}-${t.c}`] = 'revealed';
          }
        });
        return nextState;
      });
      await new Promise(resolve => setTimeout(resolve, 200));
    }

    isAnimatingRef.current = false;
    setIsAnimating(false);
  }, [matrix, processedLetters, onDing, onWrong]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return { tileStates, isAnimating };
};
