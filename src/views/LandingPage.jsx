import React from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { uiCopy } from '../data/quizzes';

/**
 * Landing Page — schermata d'ingresso.
 * Design: sfondo starfield cosmico, gerarchia tipografica ampia,
 * molto spazio bianco (breathing room), bottone CTA luminoso.
 */
const LandingPage = () => {
  return (
    <div className="landing-page">

      {/* ── Sfondo Cosmico multi-layer ── */}
      <div className="cosmic-bg">
        <div className="cosmic-bg__blob cosmic-bg__blob--purple" />
        <div className="cosmic-bg__blob cosmic-bg__blob--blue" />
        <div className="cosmic-bg__blob cosmic-bg__blob--cyan" />
      </div>

      {/* ── Contenuto ── */}
      <div className="hero">

        {/* Titolo Hero */}
        <Motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hero__title"
        >
          {uiCopy.homepageTitle}
        </Motion.h1>

        {/* Sottotitolo */}
        <Motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hero__subtitle"
        >
          {uiCopy.homepageSubtitle}
          <br />
          <span style={{ opacity: 0.7, fontSize: '0.9em' }}>
            {uiCopy.homepageExplanation}
          </span>
        </Motion.p>

        {/* CTA */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ marginTop: '2rem' }}
        >
          <Link to="/regolamento" className="hero__cta">
            <span>{uiCopy.ctaRules}</span>
            <span className="hero__cta-arrow">→</span>
          </Link>
        </Motion.div>

      </div>
    </div>
  );
};

export default LandingPage;
