---
description: Esegue un controllo finale del progetto prima di demo o consegna.
---

# Release Readiness

1. // parallel
   Esegui i controlli di qualità:
2. // parallel
   `npm run build`
3. // parallel
   `npm run lint`
4. Verifica manualmente:
   - permessi camera
   - fallback camera
   - layout desktop
   - layout mobile
   - reveal tiles
   - centratura frase
5. // capture: SUMMARY
   Prepara un riepilogo finale di readiness.
6. Mostra `{{SUMMARY}}` con:
   - stato
   - blocker
   - rischi non bloccanti
   - prossimi passi
