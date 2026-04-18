import PlayerCamera from '../player/PlayerCamera'
import Board from '../game/Board'
import HintBox from '../game/HintBox'

function MainScreen() {
  return (
    <main className="min-h-screen bg-night px-4 py-6 text-white md:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 md:flex-row">
        <section className="md:w-1/3">
          <PlayerCamera label="GIOCATORE 1" />
        </section>

        <section className="flex flex-1 flex-col gap-5">
          <Board phrase="IL SONNO" />
          <HintBox hint="31 DICEMBRE IN ITALIA" />
        </section>
      </div>
    </main>
  )
}

export default MainScreen
