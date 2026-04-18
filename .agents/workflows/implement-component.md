---
description: Implementa un componente React del progetto in modo controllato, con planning, verifica e digest finale.
---

# Implement Component

## Goal
Implementare o completare un singolo componente del progetto senza contaminare aree fuori scope.

## Procedura

1. Entra in Planning Mode e riassumi:
   - obiettivo del componente
   - dipendenze
   - file da creare/modificare
   - rischi principali

2. Leggi le rules rilevanti del workspace.

3. Analizza i contratti del componente:
   - props
   - stato
   - dipendenze da util
   - output visuale atteso

4. Se il componente tocca logica complessa, crea o aggiorna prima l'utility dedicata.

5. Implementa il componente con modifiche minime e leggibili.

6. Se il componente è UI, aggiungi checklist di verifica visiva.

7. // turbo
   Esegui i controlli rilevanti:
   - `npm run build`
   - `npm run lint`

8. Chiudi con un digest finale:
   - file cambiati
   - verifiche eseguite
   - limiti residui
