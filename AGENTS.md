# Project Rules

## Project
Replica web del tabellone de "La Ruota della Fortuna" con camera giocatore live e board animata TV-style.

## Tech Stack
- Frontend: React + Vite
- Styling: Tailwind CSS
- Animation: Framer Motion
- Camera: `getUserMedia`
- Utilities: JavaScript modulare per board logic

## Global Policies
- Mantieni la logica della disposizione frase fuori dai componenti visuali.
- Preferisci componenti piccoli e coesi.
- Mantieni naming esplicito e coerente con dominio TV/game.
- Evita dipendenze nuove senza una ragione chiara nel diff.
- Non modificare file fuori scope.
- Per ogni fix di logica, aggiungi o aggiorna almeno un test o una procedura manuale ripetibile.
- Per ogni modifica UI rilevante, documenta i controlli visuali da eseguire.
- Non hardcodare segreti o endpoint sensibili.
- Prima di toccare webcam/media handling, considera fallback ed error states.

## Preferred Structure
- `src/components/layout/`
- `src/components/player/`
- `src/components/game/`
- `src/utils/`
- `public/sounds/` solo se richiesto
