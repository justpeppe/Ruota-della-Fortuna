# 🎡 Ruota della Fortuna - Web Game Edition

Una web app interattiva sviluppata in React che replica fedelmente il tabellone del celebre gioco televisivo "La Ruota della Fortuna", arricchita con una modalità streaming integrata.

## 🌟 Funzionalità Principali
* **Tabellone Animato:** Griglia interattiva (4 righe) con animazioni 3D "Flip" (girata) gestite tramite Framer Motion.
* **Live Player Cam (9:16):** Integrazione nativa della webcam (ottimizzata per l'uso di un iPhone via Continuity Camera su Mac) in formato verticale tipo TikTok/Reels per riprendere il giocatore in tempo reale.
* **Auto-Centratura delle Parole:** Algoritmo che distribuisce e centra automaticamente le frasi sulle 4 righe del tabellone televisivo.
* **Estetica TV:** UI curata con Tailwind CSS per ricreare gli effetti neon, le ombreggiature e i gradienti del programma originale.

## 🛠 Stack Tecnologico
* **Frontend:** React.js (Vite)
* **Styling:** Tailwind CSS
* **Animazioni:** Framer Motion
* **Media:** WebRTC (`navigator.mediaDevices.getUserMedia`)

## 🚀 Come avviare il progetto
1. Clona la repository.
2. Esegui `npm install` per installare le dipendenze.
3. Esegui `npm run dev` per avviare il server di sviluppo.
4. Apri il browser, consenti l'accesso alla fotocamera (seleziona l'iPhone se sei su Mac) e gioca!
