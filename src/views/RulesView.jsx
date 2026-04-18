import React from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { uiCopy } from '../data/quizzes';

/**
 * RulesView — Schermata intermedia per il regolamento.
 * Design: Glassmorphism, focus sul testo, CTA finale.
 */
const RulesView = () => {
  return (
    <div className="rules-view">
      
      {/* Sfondo Cosmico (stesso della landing per continuità) */}
      <div className="cosmic-bg">
        <div className="cosmic-bg__blob cosmic-bg__blob--purple" />
        <div className="cosmic-bg__blob cosmic-bg__blob--blue" />
        <div className="cosmic-bg__blob cosmic-bg__blob--cyan" />
      </div>

      <div className="rules-view__container">
        
        {/* Intestazione */}
        <Motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rules-view__header"
        >
          <span className="rules-view__badge">IL MANUALE</span>
          <h1 className="rules-view__title">{uiCopy.rulesTitle}</h1>
        </Motion.div>

        {/* Testo Regolamento Unico */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="rules-view__box"
        >
          <p className="rules-view__text">
            {uiCopy.rulesExplanation}
          </p>
        </Motion.div>

        {/* Pulsante Finale */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="rules-view__footer"
        >
          <Link to="/menu" className="hero__cta hero__cta--primary">
            <span>{uiCopy.ctaStart}</span>
            <span className="hero__cta-arrow">→</span>
          </Link>
          
          <Link to="/" className="rules-view__back">
            {uiCopy.backButton}
          </Link>
        </Motion.div>

      </div>
    </div>
  );
};

export default RulesView;
