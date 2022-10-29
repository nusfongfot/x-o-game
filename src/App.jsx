import { useState, useEffect } from 'react'

import Header from './componets/Header'
import Board from './componets/Board'
import Status from './componets/Status'
import History from './componets/History'

import { calculateWinner, DEAD_WINNER } from './utils/helpers'

const initialBoard = Array(9).fill(null)
const initialStatus = {
  winner: null,
  turn: 'X'
}

function App() {
  const [status, setStatus] = useState(initialStatus)
  const [nextPlay, setNextPlay] = useState(true)
  const [step, setStep] = useState(0)
  const [gameHistory, setGameHistory] = useState([
    {
      squaresList: initialBoard,
      squareSelected: null
    }
  ])

  // todo implement onClick when user click on board
  // this function should
  // 1. save game history
  // 2. update game step
  function onBoardClick(i) {
    //เขียนดักตัวที่เลือกแล้วกับผู้ชนะ  เพื่อปิดเกม
    const selectedSquare = gameHistory[step].squaresList[i]

    if (selectedSquare || status.winner) return

    const history = gameHistory.slice(0, step + 1)
    const current = history[history.length - 1]

    const squares = current.squaresList.slice()
    squares[i] = nextPlay ? 'X' : 'O'

    //ตัวเชื่อให้ x o แสดงผล  setGameHistory,setStep,setNextPlay
    setGameHistory(
      history.concat({
        squaresList: squares,
        squareSelected: i
      })
    )
    setStep(history.length)
    setNextPlay(!nextPlay)
  }

  function onStepClick(step) {
    setGameHistory(gameHistory.slice(0, step + 1))
    //กลับไป step ที่เลือก
    setStep(step)
    //หา X O ว่าเป็นคนไหน
    setNextPlay(step % 2 === 0)
  }

  // todo implement sideEffect when app state change
  // this function should
  // calculate winner
  // calculate next app state
  useEffect(() => {
    const current = gameHistory[step]
    const winner = calculateWinner(current.squaresList)

    if (winner) {
      setStatus({ winner: winner })
      return
    }

    if (step > 8) {
      const deatWinner = {
        player: DEAD_WINNER
      }
      setStatus({ winner: deatWinner })
      return
    }

    setStatus({ turn: nextPlay ? 'X' : 'O' })
  }, [gameHistory, nextPlay, step])

  return (
    <>
      <Header />
      <Status player={status.winner?.player} turn={status.turn} />
      <Board
        history={gameHistory}
        step={step}
        onClick={onBoardClick}
        winnerLine={status.winner?.line}
      />
      <History history={gameHistory} onClick={onStepClick} />
    </>
  )
}

export default App
