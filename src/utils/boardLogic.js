export const BOARD_ROWS = 4
export const BOARD_COLS = 12

const normalizePhrase = (phrase) => phrase.trim().replace(/\s+/g, ' ').toUpperCase()

const splitWordsIntoRows = (phrase, rows = BOARD_ROWS, cols = BOARD_COLS) => {
  const words = normalizePhrase(phrase).split(' ').filter(Boolean)
  const lines = []
  let currentLine = ''

  for (const word of words) {
    const nextLine = currentLine ? `${currentLine} ${word}` : word

    if (nextLine.length <= cols) {
      currentLine = nextLine
      continue
    }

    if (currentLine) {
      lines.push(currentLine)
    }

    currentLine = word

    if (lines.length === rows) {
      break
    }
  }

  if (currentLine && lines.length < rows) {
    lines.push(currentLine)
  }

  return lines.slice(0, rows)
}

export const buildBoardMatrix = (phrase, rows = BOARD_ROWS, cols = BOARD_COLS) => {
  const matrix = Array.from({ length: rows }, () => Array(cols).fill(null))
  const lines = splitWordsIntoRows(phrase, rows, cols)

  lines.forEach((line, rowIndex) => {
    const startCol = Math.max(0, Math.floor((cols - line.length) / 2))

    line.split('').forEach((char, charIndex) => {
      const targetCol = startCol + charIndex
      if (targetCol >= 0 && targetCol < cols) {
        matrix[rowIndex][targetCol] = char
      }
    })
  })

  return matrix
}
