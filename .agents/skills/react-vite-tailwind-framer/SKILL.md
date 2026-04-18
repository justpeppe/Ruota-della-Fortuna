---
name: react-vite-tailwind-framer
description: Imposta o completa progetti React con Vite, Tailwind CSS e Framer Motion. Usala quando il task richiede setup frontend, configurazione styling o componenti animati.
---

# React Vite Tailwind Framer

## Goal
Configurare e sviluppare in modo coerente il frontend del progetto.

## When to use
Usa questa skill quando:
- manca lo scaffold iniziale
- serve configurare Tailwind
- serve integrare Framer Motion
- bisogna creare componenti React UI-first

Non usarla quando:
- il task riguarda solo copywriting
- il task è puramente backend

## Instructions

1. Verifica la presenza dei file chiave:
   - `package.json`
   - `vite.config.*`
   - `tailwind.config.*`
   - `src/main.*`
   - `src/index.css`

2. Se il progetto è incompleto, proponi i file mancanti.

3. Per componenti UI:
   - mantieni chiara la separazione tra layout, game, player
   - usa Tailwind per styling e framer-motion per motion mirato

4. Verifica che la build resti funzionante.

## Constraints
- Non introdurre librerie extra se non necessarie.
- Non spostare lo stack fuori da React + Vite + Tailwind + Framer Motion.
