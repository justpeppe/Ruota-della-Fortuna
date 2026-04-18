# PRD - Progetto "Ruota della Fortuna Web"

## Ruolo dell'AI
Agisci come un Senior React Developer. Il tuo compito è costruire questa applicazione web partendo da zero seguendo le direttive sottostanti.

## Obiettivo del Progetto
Sviluppare un'interfaccia web per un gioco a premi basato su "La Ruota della Fortuna". L'app deve affiancare la webcam in tempo reale del giocatore (in formato verticale) al tabellone del gioco.

## Specifiche Tecniche Obbligatorie
* **Framework:** React 18+ inizializzato con Vite.
* **CSS:** Tailwind CSS. Colori principali: sfondo globale blu notte (`#020b2d`), bordi neon ciano (`#00e5ff`) e accenti viola/blu.
* **Animazioni:** Framer Motion (`framer-motion`) con rotazione 3D (180° asse Y) per rivelare la lettera.

## Struttura del Layout
L'app è composta da un singolo schermo (`MainScreen`) diviso in due macro-aree:
1. **Colonna di Sinistra (Player Area):**
   * Elemento `<video>` gestito tramite `navigator.mediaDevices.getUserMedia`.
   * Aspect ratio forzato a `9:16`.
   * Bordo neon e badge "GIOCATORE 1".
2. **Colonna di Destra (Game Area):**
   * **Tabellone (Board):** griglia di 4 righe con celle `Tile`.
   * **Box Suggerimento (HintBox):** banner sotto il tabellone (es. "31 DICEMBRE IN ITALIA").

## Logica Core
Nel tabellone è richiesta una funzione JavaScript che:
* Riceve una frase in input.
* Divide in parole.
* Posiziona le lettere su una matrice (4 righe x 12 colonne).
* Centra le parole per riga e manda a capo senza spezzare le parole.

## Componenti
1. `App.jsx` e `MainScreen.jsx`
2. `PlayerCamera.jsx`
3. `Board.jsx`
4. `Tile.jsx`
5. `HintBox.jsx`
