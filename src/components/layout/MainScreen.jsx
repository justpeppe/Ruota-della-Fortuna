import PlayerCamera from '../player/PlayerCamera'
import Board from '../game/Board'
import HintBox from '../game/HintBox'

function MainScreen() {
  return (
    <main className="main-screen">
      <div className="main-screen__layout">
        <section className="main-screen__camera">
          <PlayerCamera label="GIOCATORE 1" />
        </section>

        <section className="main-screen__game">
          <Board phrase="IL SONNO" />
          <HintBox hint="31 DICEMBRE IN ITALIA" />
        </section>
      </div>
    </main>
  )
}

export default MainScreen
