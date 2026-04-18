import { useMemo } from 'react'
import Tile from './Tile'
import { BOARD_COLS, BOARD_ROWS, buildBoardMatrix } from '../../utils/boardLogic'

function Board({ phrase }) {
  const matrix = useMemo(() => buildBoardMatrix(phrase), [phrase])

  return (
    <section className="rounded-2xl border border-neon-violet/70 bg-panel p-4 shadow-neon md:p-6">
      <div className="board-perspective grid grid-rows-4 gap-2">
        {Array.from({ length: BOARD_ROWS }).map((_, rowIndex) => (
          <div key={`row-${rowIndex}`} className="grid grid-cols-12 gap-2">
            {Array.from({ length: BOARD_COLS }).map((__, colIndex) => {
              const letter = matrix[rowIndex][colIndex]

              return (
                <Tile
                  key={`${rowIndex}-${colIndex}`}
                  letter={letter}
                  revealed={Boolean(letter && letter !== ' ')}
                  delay={(rowIndex * BOARD_COLS + colIndex) * 0.01}
                />
              )
            })}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Board
