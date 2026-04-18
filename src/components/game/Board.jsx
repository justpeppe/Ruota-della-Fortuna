import React from 'react';
import Tile from './Tile';
import { useBoardScale } from '../../hooks/useBoardScale';

/**
 * Tabellone completo — struttura a croce 12-14-14-12.
 * 
 * Separazione delle tessere: gap-px tra celle.
 * Cornice bianca: SVG assoluto sopra tutto.
 * Scaling: Il wrapper ha un'altezza prefissata calcolata dall'hook per evitare troncamenti.
 */
const Board = ({ matrix, tileStates }) => {
  const { containerRef, contentRef, scale, scaledHeight } = useBoardScale(900);

  return (
    <div
      ref={containerRef}
      className="board-scale-wrapper"
      style={{ height: scaledHeight !== 'auto' ? `${scaledHeight}px` : 'auto' }}
    >
      <div
        ref={contentRef}
        className="inline-block"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
          width: '900px',
          willChange: 'transform',
        }}
      >
        {/* Scocca esterna */}
        <div className="board">

          {/* Vignettatura angoli */}
          <div className="board__vignette" />

          {/* Griglia delle tessere */}
          <div className="board__container">

            {/* Frame SVG */}
            <div className="board__frame-svg">
              <svg
                viewBox="-0.5 -0.5 141 41"
                preserveAspectRatio="none"
                className="board__frame-svg-element"
              >
                <defs>
                  <filter id="frame-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="0.6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d="M10,0 H130 V10 H140 V30 H130 V40 H10 V30 H0 V10 H10 Z"
                  fill="none"
                  stroke="var(--color-white-bright)"
                  strokeWidth="1.2"
                  filter="url(#frame-glow)"
                />
              </svg>
            </div>

            {/* Tessere */}
            <div className="board__grid">
              {matrix.map((row, rowIndex) => (
                <div key={rowIndex} className="board__row">
                  {row.map((cell, cellIndex) => (
                    <Tile
                      key={`${rowIndex}-${cellIndex}`}
                      char={cell.char}
                      isActive={cell.isActive}
                      isMissingSlot={cell.isMissingSlot}
                      status={tileStates[`${rowIndex}-${cellIndex}`] || 'hidden'}
                    />
                  ))}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
