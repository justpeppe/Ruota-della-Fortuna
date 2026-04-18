# PRD - Progetto "Ruota della Fortuna Web"

## Ruolo dell'AI
Agisci come un Senior React Developer. Il tuo compito è costruire questa applicazione web partendo da zero seguendo le direttive sottostanti.

## Obiettivo del Progetto
Sviluppare un'interfaccia web per un gioco a premi basato su "La Ruota della Fortuna". L'app deve affiancare la webcam in tempo reale del giocatore (in formato verticale) al tabellone del gioco, fungendo da "Regia da Game Master" invisibile.

## Setup Fisico
* Il Game Master controlla il computer (macOS).
* A schermo intero c'è il gioco.
* Un giocatore prova a indovinare ed è inquadrato dal feed video della telecamera (es. iPhone collegato come webcam via Continuity Camera in formato 9:16).

## Specifiche Tecniche Obbligatorie
* **Framework:** React 18+ inizializzato con Vite.
* **CSS:** Tailwind CSS. Colori principali: sfondo globale blu notte (`#020b2d`), bordi neon ciano (`#00e5ff`) e accenti viola/blu.
* **Animazioni:** Framer Motion (`framer-motion`) con rotazione 3D (180° asse Y) per rivelare la lettera.

## Struttura del Layout & Viste
L'app avrà due Viste principali:
1. **Homepage (View Game Master):**
   * Schermata simpaticamente personalizzabile con copia testuale separata (es. titolo, sottotitolo).
   * Lista dei quiz importata e ciclabile.
   * Un bottone per ogni quiz che, al click, porta al gioco caricando il suggerimento e la frase scelti.
2. **Game Screen (View Giocatore):**
   * Schermo diviso in due macro-aree:
     * **Colonna di Sinistra (Player Area):**
       * Elemento `<video>` gestito tramite `navigator.mediaDevices.getUserMedia`.
       * Aspect ratio forzato a `9:16`. Bordo neon e badge "GIOCATORE 1".
     * **Colonna di Destra (Game Area):**
       * **Tabellone (Board):** griglia di 4 righe con celle `Tile`.
       * **Box Suggerimento (HintBox):** banner sotto il tabellone.

## Logica Core & Gameplay
Nel tabellone è richiesta una funzione JavaScript che:
* Riceve una frase in input, divide in parole, posiziona le lettere sulla matrice e le centra per riga (senza spezzare le parole).
* **Controllo da Game Master:** L'apparizione delle lettere è innescata dai tasti fisici della tastiera del computer.
  * Un `EventListener` globale intercetta l'input.
  * Se la lettera è presente nella frase del quiz: parte l'animazione di rivelazione per ogni occorrenza e suona ripetutamente `RIGHT.mp3`.
  * Se la lettera non è presente: suona `WRONG.mp3`.

## Gestione Suoni
* **"Multi-Ding" Sincronizzato:** Quando una lettera viene indovinata, per ogni tessera che viene illuminata/rivelata verrà istanziato e riprodotto un nuovo oggetto `Audio('RIGHT.mp3')` con un leggero ritardo (es. 400 millisecondi) tra loro, simulando l'effetto televisivo senza che si interrompano a vicenda.

## Dati Configurabili
* **Copy e Quiz:** Un file `src/data/quizzes.js` dedicato conterrò tutti i copy e l'elenco dei quiz, isolando i dati dal codice della UI.

## Componenti e Configurazione Albero
```text
ruota-della-fortuna/
├── public/
│   ├── sounds/
│   │   ├── RIGHT.mp3 
│   │   └── WRONG.mp3 
├── src/
│   ├── components/
│   │   ├── game/
│   │   │   ├── Board.jsx     
│   │   │   ├── Tile.jsx      
│   │   │   └── HintBox.jsx   
│   │   ├── player/
│   │   │   └── PlayerCamera.jsx
│   ├── data/
│   │   └── quizzes.js        # File con Copy e lista dei Quiz
│   ├── hooks/
│   │   ├── useGameLogic.js   # Gestione tasti e board state
│   │   └── useAudio.js       # Gestione ding sincronizzati
│   ├── views/
│   │   ├── Homepage.jsx      # Menù Game Master
│   │   └── GameScreen.jsx    # Tabellone e Cam
│   ├── App.jsx               # Navigazione (Home <-> Game)
│   ├── index.css             
│   └── main.jsx              
```
