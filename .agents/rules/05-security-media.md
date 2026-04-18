# Security & Media Handling

- Non loggare stream, device info sensibili o errori verbosi con dati personali.
- Gestisci il rifiuto dei permessi della camera con UI chiara.
- Ferma sempre le track dello stream in cleanup.
- Non assumere che `getUserMedia` sia disponibile: prevedi fallback.
- Non salvare video o snapshot senza richiesta esplicita.
