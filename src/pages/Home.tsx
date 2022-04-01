import React from 'react'
import { Game } from '../components/guess'
import { getGameNumber } from '../components/guess/helpers'
import { centeredContainerCss } from '../styles/gameStyles'

export const Home: React.FC = () => {
  return (
    <div>
      <h2 className={centeredContainerCss.toString()}>
        Five Letter #{getGameNumber() + 1}
      </h2>
      <Game />
    </div>
  )
}
