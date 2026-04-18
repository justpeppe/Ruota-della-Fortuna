# Guida alla Pubblicazione su GitHub Pages 🚀

Questa guida ti accompagnerà passo-dopo-passo nella pubblicazione della tua **Ruota della Fortuna** su internet, in modo che chiunque possa giocarci tramite un link (es. `tuo-nome.github.io/ruota-della-fortuna`).

---

## 🛠️ Cosa abbiamo già preparato per te
Per facilitarti il lavoro, abbiamo già configurato:
1.  **Vite (`vite.config.js`)**: Impostato per caricare correttamente le immagini e i file anche quando il sito non è nella "root" del dominio.
2.  **Routing (`App.jsx`)**: Abbiamo attivato l'**HashRouter**. Questo è fondamentale su GitHub Pages perché permette di ricaricare la pagina o navigare tra i quiz senza ricevere errori "404 Not Found".
3.  **Automazione (`.github/workflows/deploy.yml`)**: Abbiamo creato uno script automatico. Una volta caricato il codice su GitHub, il server costruirà e pubblicherà il sito per te in automatico.

---

## 📋 I Micro-Step per la pubblicazione

### 1. Crea un nuovo Repository su GitHub
1. Vai su [github.com/new](https://github.com/new).
2. Scegli un nome per il progetto (es: `ruota-fortuna-fede`).
3. Mantienilo **Public** (necessario per GitHub Pages gratuito).
4. **NON** spuntare "Add a README" o "Add .gitignore" (le abbiamo già nel progetto).
5. Clicca su **Create repository**.

### 2. Collega il tuo PC a GitHub e carica il codice
Apri il terminale nella cartella del progetto ed esegui questi comandi uno alla volta:

```bash
# Inizializza git (se non lo hai già fatto)
git init

# Aggiungi tutti i file
git add .

# Crea il primo salvataggio (commit)
git commit -m "Configurazione per il deploy"

# Collega il repository remoto (Copia il link che trovi su GitHub dopo aver creato il repo)
# Sostituisci IL_TUO_LINK_QUI con quello che hai copiato
git remote add origin IL_TUO_LINK_QUI

# Rinomina il branch in main
git branch -M main

# Invia il codice a GitHub
git push -u origin main
```

### 3. Attiva GitHub Actions per la pubblicazione
Una volta inviato il codice:
1. Vai sulla pagina del tuo repository su GitHub.
2. Clicca sulla tab **Settings** (in alto a destra).
3. Nella colonna di sinistra, clicca su **Pages**.
4. Sotto la voce **Build and deployment** > **Source**, seleziona **GitHub Actions** nel menu a tendina.

### 4. Controlla il progresso
1. Clicca sulla tab **Actions** del tuo repository.
2. Vedrai un'azione chiamata "Deploy static content to Pages" in esecuzione (pallino giallo).
3. Quando diventa verde (✅), il tuo sito è online!
4. Torna in **Settings > Pages** e vedrai il link del tuo sito (es: `https://tuonome.github.io/tuo-repo/`).

---

## 💡 Note importanti
- **Hash nel link**: Noterai che i link ora hanno un `#` (es: `.../#/menu`). È normale ed è ciò che permette al sito di funzionare correttamente su GitHub Pages senza server dedicati.
- **Aggiornamenti**: Ogni volta che farai una modifica al codice e userai `git push`, GitHub Pages si aggiornerà automaticamente dopo un paio di minuti.

**Buon divertimento con il tuo gioco online!** 🎉
