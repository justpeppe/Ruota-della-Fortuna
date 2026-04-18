import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import QuizSelection from './views/QuizSelection';
import GameScreen from './views/GameScreen';

/**
 * Componente principale dell'applicazione.
 * Gestisce il routing tra la Homepage e le sessioni di gioco.
 */
function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* Menù di selezione */}
          <Route path="/menu" element={<QuizSelection />} />

          {/* Rotta di Gioco: Dinamica in base all'ID del quiz */}
          <Route path="/quiz/:id" element={<GameScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
