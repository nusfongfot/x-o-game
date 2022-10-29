import React from 'react'

import { DEAD_WINNER } from '../../utils/helpers'

import './Status.scss'

// implement calculateStatus to calculate status to display
const calculateStatus = (playerWin, turn) => {
  if (playerWin === DEAD_WINNER) return playerWin

  if (playerWin) return `Winner: ${playerWin}`

  return `Next Player: ${turn}`
}

// implement stauts using Status.scss
function Status({ player, turn }) {
  const status = calculateStatus(player, turn)

  return <div className="status">{status}</div>
}

export default Status
