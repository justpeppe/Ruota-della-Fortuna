---
name: board-layout-engine
description: Progetta la logica di centratura e word-wrap per tabelloni a griglia tipo game show. Usala quando l'utente chiede layout frase, distribuzione lettere su righe o fix di board logic.
---

# Board Layout Engine

## Goal
Generare una matrice board affidabile a partire da una frase.

## Instructions

1. Normalizza la frase.
2. Dividila in parole senza perdere la struttura logica degli spazi.
3. Distribuisci le parole su righe senza spezzarle.
4. Calcola la centratura orizzontale per ogni riga.
5. Restituisci un output semplice da renderizzare in React.

## Constraints
- Non spezzare parole senza requisito esplicito.
- Non mescolare logica di rendering e logica di disposizione.
- Non inventare capacità della board se il layout reale non le supporta.

## Output format
- configurazione board
- algoritmo scelto
- struttura dati restituita
- edge case gestiti
