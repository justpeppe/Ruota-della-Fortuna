---
description: Risolve un bug minimizzando il diff e validando la correzione.
---

# Bugfix Playbook

1. Riproduci il bug e descrivi comportamento atteso vs osservato.
2. Isola la causa nel punto più piccolo possibile.
3. Applica una correzione minima.
4. Aggiungi un test o una procedura di regressione.
5. // turbo
   Esegui build, lint e test rilevanti.
6. Riassumi:
   - root cause
   - file modificati
   - rischio residuo
   - verifica manuale
