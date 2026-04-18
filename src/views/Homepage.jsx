import React from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { uiCopy } from '../data/quizzes';

/**
 * Homepage dell'applicazione.
 * Contiene il titolo, la spiegazione del gioco e il menù dei quiz.
 */
const Homepage = ({ quizzes }) => {
  return (
    <div className="homepage">

      {/* Container Centrale per Allineamento */}
      <div className="homepage__container">

        {/* Titolo Principale con Neon Glow */}
        <Motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="homepage__intro"
        >
          <h1 className="homepage__title">
            {uiCopy.homepageTitle}
          </h1>
          <p className="homepage__subtitle">
            {uiCopy.homepageSubtitle}
          </p>
        </Motion.div>

        {/* Box Spiegazione Stilizzato */}
        <Motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="homepage__rule-box"
        >
          <h2 className="homepage__rule-title">
            Regolamento Regia
          </h2>
          <p className="homepage__rule-copy">
            {uiCopy.homepageExplanation}
          </p>
        </Motion.div>

        {/* Menù dei Quiz Verticale */}
        <div className="homepage__quiz-list-wrap">
          <h3 className="homepage__quiz-label">
            Selezione Quiz
          </h3>

          {quizzes.map((quiz, index) => (
            <Motion.div
              key={quiz.id}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index + 0.4 }}
              className="homepage__quiz-item"
            >
              <Link
                to={`/quiz/${quiz.id}`}
                className="homepage__quiz-link"
              >
                {/* Effetto Glow al passaggio */}
                <div className="homepage__quiz-sweep" />

                <span className="homepage__quiz-text">
                  QUIZ #{quiz.id}: <span className="homepage__quiz-hint">{quiz.hint}</span>
                </span>
              </Link>
            </Motion.div>
          ))}
        </div>

        {/* Footer info */}
        <div className="homepage__footer">
          Game Master Mode • Active • Ready for Live
        </div>
      </div>
    </div>
  );
};

export default Homepage;
