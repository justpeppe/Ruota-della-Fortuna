import React, { useRef, useEffect, useState } from 'react';

/**
 * PlayerCamera — feed webcam live.
 *
 * Il componente è AGNOSTICO rispetto alle proporzioni:
 * riempie w-full h-full del suo parent senza imporre dimensioni.
 * Il parent in GameScreen.jsx garantisce il ratio 9:16 tramite CSS calc().
 *
 * La webcam viene richiesta in orientamento portrait (9:16) al browser.
 * object-cover riempie il box senza barre se il browser onora la richiesta.
 */
const PlayerCamera = ({ className = '' }) => {
  const videoRef = useRef(null);
  const [error, setError] = useState(null);
  const [isStreaming, setIsStreaming] = useState(false);

  useEffect(() => {
    let stream;
    async function startCamera() {
      try {
        // Richiediamo portrait 9:16. I browser moderni (Chrome, Safari) 
        // onoreranno aspectRatio per webcam che lo supportano.
        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            aspectRatio: 9 / 16,
            width: { ideal: 540 },
            height: { ideal: 960 },
            facingMode: 'user',
          },
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setIsStreaming(true);
        }
      } catch {
        // Fallback: prova senza constraintment sul ratio
        try {
          stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            setIsStreaming(true);
          }
        } catch {
          setError('Webcam non disponibile.');
        }
      }
    }

    startCamera();
    return () => { if (stream) stream.getTracks().forEach(t => t.stop()); };
  }, []);

  return (
    <div className={`player-camera ${className}`}>

      <div className="player-camera__placeholder" aria-hidden="true">
        <span className="player-camera__placeholder-label">
          Live Camera
        </span>
      </div>

      {error ? (
        <div className="player-camera__error">
          <p className="player-camera__error-icon">⚠️</p>
          <p className="player-camera__error-text">
            {error}
          </p>
        </div>
      ) : (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="player-camera__video"
        />
      )}

      {/* Badge LIVE */}
      <div className="player-camera__badge">
        <span className="player-camera__badge-dot">
          {isStreaming && <span className="player-camera__badge-ping" />}
          <span className={isStreaming ? 'player-camera__badge-dot--live' : 'player-camera__badge-dot--idle'} />
        </span>
        <span className="player-camera__badge-text">
          Live
        </span>
      </div>

      {/* Vignettatura */}
      <div className="player-camera__vignette" />
    </div>
  );
};

export default PlayerCamera;
