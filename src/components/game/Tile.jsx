import React from 'react';
import { AnimatePresence, motion as Motion } from 'framer-motion';

/**
 * Singola tessera del tabellone con stati avanzati.
 * Stati: 'hidden' | 'illuminated' | 'revealed'
 * 
 * La tessera NON disegna nessun bordo esterno: la cornice bianca 
 * è gestita interamente dall'SVG in Board.jsx per evitare sovrapposizioni.
 * Il separatore interno è gap nel container flex (in Board), non border.
 */
const Tile = ({ char, isActive, status, isMissingSlot, forceRevealAll = false }) => {
  // Slot fantoccio per gli angoli smussati della griglia
  if (isMissingSlot) {
    return <div className="tile tile--missing" />;
  }

  // Tessera sfondo (blu LED puro)
  if (!isActive || char === ' ') {
    return (
      <div className="tile">
        <div className="tile__led" />
        <div className="tile__depth" />
      </div>
    );
  }

  if (forceRevealAll && isActive && char !== ' ') {
    return (
      <div className="tile tile--revealed tile--revealed-instant">
        <div className="tile__face">
          <span className="tile__label">
            {char}
          </span>
        </div>
      </div>
    );
  }

  // Tessera attiva con stati animati
  return (
    <div className={`tile tile--${status}`}>
      <AnimatePresence mode="wait">

        {status === 'hidden' && (
          <Motion.div
            key="hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            className="tile__face"
          />
        )}

        {status === 'illuminated' && (
          <Motion.div
            key="illuminated"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="tile__face"
          />
        )}

        {status === 'revealed' && (
          <Motion.div
            key="revealed"
            initial={{ rotateY: -90 }}
            animate={{ rotateY: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className="tile__face"
          >
            <div className="tile__reflection" />
            <span className="tile__label">
              {char}
            </span>
          </Motion.div>
        )}

      </AnimatePresence>
    </div>
  );
};

export default Tile;
