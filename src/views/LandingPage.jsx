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

        {/* Badge categoria */}
        <Motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge-broadcast">
            Game Show Experience
          </span>
        </Motion.div>

        {/* Titolo Hero */}
        <Motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hero__title"
        >
          {uiCopy.homepageTitle}
        </Motion.h1>

        {/* Separatore */}
        <Motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="landing-page__separator"
        />

        {/* Sottotitolo */}
        <Motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="hero__subtitle"
        >
          Gestisci il tabellone dal vivo. Controlla ogni lettera, ogni reveal.
          <br />
          Un game show completo nel tuo browser.
        </Motion.p>

        {/* CTA */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link to="/menu" className="hero__cta">
            <span>Inizia a Giocare</span>
            <span className="hero__cta-arrow">→</span>
          </Link>
        </Motion.div>

        {/* Features hint */}
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="hero__feature-list"
        >
          {['Webcam Live', 'Reveal Animati', 'Tema Televisivo'].map(f => (
            <span key={f} className="hero__feature-item">
              <span className="hero__feature-dot" />
              {f}
            </span>
          ))}
        </Motion.div>

      </div>
    </div>
  );
};

export default LandingPage;
