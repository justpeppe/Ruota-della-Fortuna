# Project Context

- Obiettivo: realizzare una web app single-screen con player cam a sinistra e board a destra.
- Il layout deve evocare il linguaggio visivo di un game show televisivo.
- La board deve supportare frasi multi-parola centrate su più righe senza spezzare le parole.
- Le tessere devono mostrare stati distinti: vuota, nascosta, rivelata, cella inattiva/spaziatrice.
- Il box tema/suggerimento va reso come banner TV leggibile e centrato.

## Dati base del dominio
- input primario: frase completa
- input secondario: hint/tema
- output della logica: matrice di celle con coordinate, tipo cella, carattere, stato reveal
