---
name: webcam-player-cam
description: Implementa integrazione webcam browser per player cam live con getUserMedia, cleanup e fallback. Usala quando il task richiede video live, gestione permessi o UI camera.
---

# Webcam Player Cam

## Goal
Integrare una player cam live sicura e stabile.

## Instructions

1. Usa `navigator.mediaDevices.getUserMedia`.
2. Gestisci loading, granted, denied e unsupported states.
3. Associa lo stream all'elemento `<video>` corretto.
4. Ferma tutte le track in cleanup.
5. Mostra fallback UI se i permessi vengono negati o la camera non è disponibile.

## Constraints
- Non registrare né salvare stream.
- Non loggare informazioni sensibili del device.
- Non lasciare stream aperti dopo unmount.
