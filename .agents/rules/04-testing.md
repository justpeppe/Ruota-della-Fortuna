# Testing

- Ogni fix che tocca la disposizione delle parole deve avere almeno un test di regressione o una procedura manuale dettagliata.
- Verifica casi minimi:
  - parola singola centrata
  - frase su più righe
  - parole lunghe vicino al limite riga
  - spazi correttamente preservati come celle inattive o gap logici
- Prima di chiudere un task, esegui build e lint se configurati.
- Se non esistono test automatici, aggiungi una checklist manuale ripetibile.
