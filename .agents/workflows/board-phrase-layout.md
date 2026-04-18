---
description: Progetta o corregge la logica di disposizione frase sul tabellone con wrap intelligente e centratura.
---

# Board Phrase Layout

## Goal
Ottenere una matrice board coerente, centrata e senza spezzare parole.

## Procedura

1. Definisci la configurazione board:
   - numero righe
   - numero colonne
   - tipo di celle inattive
   - formato output atteso

2. Raccogli almeno 5 casi di prova:
   - frase breve
   - frase lunga
   - due righe
   - tre/quattro righe
   - caso limite vicino alla larghezza massima

3. Progetta l'algoritmo come funzione pura in `src/utils/boardLogic.js`.

4. Esplicita:
   - come avviene il word-wrap
   - come viene calcolata la centratura per riga
   - come vengono rappresentati gli spazi/gap

5. Implementa la funzione.

6. // turbo
   Verifica con test o script di controllo che nessuna parola venga spezzata.

7. Riassumi:
   - strategia scelta
   - edge case coperti
   - limiti eventuali
