import React, { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Board from '../components/game/Board';
import HintBox from '../components/game/HintBox';
import PlayerCamera from '../components/player/PlayerCamera';
import { generateBoardMatrix } from '../utils/boardLogic';
import { useGameLogic } from '../hooks/useGameLogic';
import { useAudio } from '../hooks/useAudio';
import { uiCopy, quizzes } from '../data/quizzes';
import { motion as Motion } from 'framer-motion';

const CosmicBg = () => (
  <div className="cosmic-bg">
    <div className="cosmic-bg__blob cosmic-bg__blob--purple" />
    <div className="cosmic-bg__blob cosmic-bg__blob--blue" />
    <div className="cosmic-bg__blob cosmic-bg__blob--cyan" />
  </div>
);

/**
 * Vista di Gioco.
 * 
 * Layout desktop (md+):  [Camera 9:16 sidebar | Game Area]
 * Layout mobile:         [Camera strip compatta in cima | Game area sotto, scrollabile]
 * 
 * UN SOLO <PlayerCamera /> — nessun doppio stream.
 */
const GameScreen = () => {
  const { id } = useParams();
  const { playSingleDing, playWrongSound } = useAudio();

  const quiz = useMemo(() => quizzes.find(q => q.id === parseInt(id)), [id]);
  const matrix = useMemo(() => (quiz ? generateBoardMatrix(quiz.phrase) : []), [quiz]);
  const { tileStates } = useGameLogic(matrix, () => playSingleDing(), () => playWrongSound());

  if (!quiz) return <Navigate to="/" replace />;

  return (
    <div className="game-screen">

      {/* ── Sfondo cosmico ── */}
      <CosmicBg />

      {/* ══════════════════════════════════════════
          CAMERA
         ══════════════════════════════════════════ */}

      {/* Mobile: striscia orizzontale */}
      <div className="game-screen__camera-strip">
        <PlayerCamera className="player-camera--fill" />
      </div>

      {/* Desktop: sidebar verticale */}
      <div className="game-screen__camera-sidebar" style={{ width: 'calc(100svh * 9 / 16)' }}>
        <PlayerCamera className="player-camera--fill" />
      </div>

      {/* ══════════════════════════════════════════
          GAME AREA
         ══════════════════════════════════════════ */}
      <div className="game-screen__content">

        {/* Pulsante torna al menù */}
        <div className="game-screen__back-row">
          <Link to="/menu" className="game-back-button">
            {uiCopy.backButton}
          </Link>
        </div>

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="game-screen__stack"
        >
          {/* Titolo */}
          <h2 className="game-title">
            {uiCopy.gameTitle}
          </h2>

          {/* Tabellone */}
          <Board matrix={matrix} tileStates={tileStates} />

          {/* Suggerimento */}
          <HintBox hint={quiz.hint} />
        </Motion.div>

      </div>
    </div>
  );
};

export default GameScreen;
