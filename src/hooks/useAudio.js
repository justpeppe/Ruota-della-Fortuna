import { useCallback } from 'react';

/**
 * Hook per la gestione dei suoni della Ruota della Fortuna.
 */
export const useAudio = () => {
  const playSound = useCallback((path) => {
    const audio = new Audio(path);
    audio.play().catch((err) => console.warn("Audio playback failed:", err));
  }, []);

  const playSingleDing = useCallback(() => {
    playSound('/sounds/RIGHT.mp3');
  }, [playSound]);

  const playWrongSound = useCallback(() => {
    playSound('/sounds/WRONG.mp3');
  }, [playSound]);

  return {
    playSingleDing,
    playWrongSound,
  };
};
