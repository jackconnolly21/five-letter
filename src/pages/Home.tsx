import React from 'react'
import { Game } from '../components/guess'

export const Home: React.FC = () => {
  return (
    <div>
      <h2 className="centeredContainer">Five Letter</h2>
      <Game />
    </div>
  )
}
