# Ruota della Fortuna Web — Antigravity Rules

## Missione del workspace
Costruisci una web app React che replica il tabellone televisivo de "La Ruota della Fortuna" con:
- player cam live verticale 9:16 a sinistra
- board TV-style a destra
- reveal lettere con flip 3D
- hint box con tema/frase
- estetica neon blu/ciano/viola coerente e leggibile

## Priorità operative
1. Preserva la fedeltà visiva del tabellone TV.
2. Mantieni il layout stabile e responsive.
3. Mantieni la logica board separata dalla UI.
4. Preferisci modifiche piccole, verificabili e testabili.
5. Prima di refactor rischiosi, elenca impatti e file toccati.

## Stack obbligatorio
- React 18+
- Vite
- Tailwind CSS
- Framer Motion
- Browser Media APIs (`navigator.mediaDevices.getUserMedia`)

## Output atteso per task di implementazione
Quando implementi un task:
1. entra in Planning Mode e proponi il piano
2. indica file creati/modificati
3. implementa in step piccoli
4. verifica build/lint/test quando disponibili
5. chiudi con digest finale:
   - obiettivo raggiunto
   - file cambiati
   - verifiche eseguite
   - eventuali limiti residui

## Policy Antigravity-specific
- Se un task tocca configurazioni critiche o asset distruttivi, chiedi conferma prima di procedere.
- Per modifiche UI, produci anche una checklist di verifica visiva.
- Se build o test falliscono, analizza gli errori e tenta una correzione autonoma prima di fermarti.
- Non proporre librerie aggiuntive se Tailwind, React, Framer Motion o API native bastano.
- Usa artifact testuali utili quando servono: `task.md`, `implementation_plan.md`, `walkthrough.md`.
