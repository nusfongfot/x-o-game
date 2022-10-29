import './History.scss'

const getRow = (history, move) =>
  Math.floor(history[move].squareSelected / 3) + 1

// hint create helper to calculate Col
const getCol = (history, move) => (history[move].squareSelected % 3) + 1

// implenent history button to backforward game depent on user choose
// apply className in History.scss
// add action onClick into each history button
function History({ history, onClick }) {
  const moves = history.map((i, move) => {
    const moveRow = getRow(history, move)
    const moveCol = getCol(history, move)

    // using moveRow and moveCol to create description
    const desc = move
      ? `Go to move ${move} (Row: ${moveRow}) (Col: ${moveCol})`
      : 'Reset Game'

    return (
      <li key={move}>
        <button onClick={() => onClick(move)}>{desc}</button>
      </li>
    )
  })

  return (
    <div className="history">
      <ul>{moves}</ul>
    </div>
  )
}

export default History
