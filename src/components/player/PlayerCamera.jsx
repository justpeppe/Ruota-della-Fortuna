import { useEffect, useRef, useState } from 'react'

function PlayerCamera({ label }) {
  const videoRef = useRef(null)
  const [error, setError] = useState('')

  useEffect(() => {
    let localStream

    const startCamera = async () => {
      try {
        localStream = await navigator.mediaDevices.getUserMedia({
          video: {
            aspectRatio: 9 / 16,
          },
          audio: false,
        })

        if (videoRef.current) {
          videoRef.current.srcObject = localStream
        }
      } catch {
        setError('Fotocamera non disponibile o permesso negato.')
      }
    }

    startCamera()

    return () => {
      if (localStream) {
        localStream.getTracks().forEach((track) => track.stop())
      }
    }
  }, [])

  return (
    <div className="rounded-2xl border border-neon-cyan/70 bg-panel p-4 shadow-neon">
      <div className="mb-3 inline-block rounded-full border border-white/40 bg-gradient-to-r from-neon-cyan/40 to-neon-violet/50 px-4 py-1 text-xs font-bold tracking-[0.2em] text-white">
        {label}
      </div>

      <div className="relative mx-auto w-full max-w-[320px] overflow-hidden rounded-2xl border-2 border-neon-cyan/80 bg-black" style={{ aspectRatio: '9 / 16' }}>
        <video ref={videoRef} className="h-full w-full object-cover" autoPlay muted playsInline />

        {error ? (
          <div className="absolute inset-0 grid place-items-center bg-night/80 p-4 text-center text-sm text-white/90">
            {error}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default PlayerCamera
