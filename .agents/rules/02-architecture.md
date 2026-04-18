# Architecture

- `Board.jsx` non deve contenere una logica di layout opaca e monolitica: delega a `src/utils/boardLogic.js`.
- `Tile.jsx` gestisce solo rendering e animazione della singola cella.
- `PlayerCamera.jsx` gestisce stream, permessi, cleanup e fallback UI.
- `MainScreen.jsx` orchestra il layout ma non implementa dettagli algoritmici.
- Mantieni separati:
  - dati della frase
  - mapping board matrix
  - reveal state
  - presentazione UI
