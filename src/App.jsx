import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import QuizSelection from './views/QuizSelection';
import RulesView from './views/RulesView';
import GameScreen from './views/GameScreen';
import GlobalFullscreenButton from './components/layout/GlobalFullscreenButton';
import CosmicBg from './components/layout/CosmicBg';

/**
 * Componente principale dell'applicazione.
 * Gestisce il routing tra la Homepage e le sessioni di gioco.
 */
function App() {
  return (
    <HashRouter>
      <div className="app-shell">
        <CosmicBg />
        <GlobalFullscreenButton />
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/regolamento" element={<RulesView />} />

          {/* Menù di selezione */}
          <Route path="/menu" element={<QuizSelection />} />

          {/* Rotta di Gioco: Dinamica in base all'ID del quiz */}
          <Route path="/quiz/:id" element={<GameScreen />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
