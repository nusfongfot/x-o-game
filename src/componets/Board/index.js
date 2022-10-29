import React from 'react'

import Square from '../Square'

import './Board.scss'

function Board(props) {
  const { history, step, onClick, winnerLine = [] } = props
  // implement renderSquares using prepare className in Board.scss
  // and do action when user click square
  const renderSquares = history[step].squaresList.map((value, squareIdx) => {
    let isWin = false

    for (let w = 0; w < winnerLine.length; w++) {
      const winnerIdx = winnerLine[w]
      if (winnerIdx === squareIdx) {
        isWin = true
      }
    }

    return (
      <Square
        key={squareIdx}
        value={value}
        onClick={() => onClick(squareIdx)}
        win={isWin}
      />
    )
  })

  return <div className="board">{renderSquares}</div>
}

export default Board
