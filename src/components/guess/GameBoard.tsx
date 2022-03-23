import React from 'react'
import { GuessResult } from '../../features/game/types'

const GameBoard: React.FC<Props> = ({ guessResults, currentGuess }) => {
  const getResultColor = (result: number) => {
    if (result == 0) {
      return 'red'
    } else if (result <= 3) {
      return 'blue'
    } else {
      return 'green'
    }
  }

  const boxStyles = {
    border: '2px solid #969696',
    height: 50,
    padding: 5,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  }

  const letterRow = (guess: string, result: number | null, i: number) => {
    if (guess.length > 5) {
      console.log('Error: Word length greater than 5')
    }

    const styles = { ...boxStyles, color: '#fff', backgroundColor: '#444' }
    const letters = [0, 1, 2, 3, 4].map((idx) => (
      <div style={styles} key={idx}>
        {idx < guess.length ? guess[idx].toUpperCase() : null}
      </div>
    ))

    const resultStyles = {
      ...boxStyles,
      color: result == null ? 'black' : getResultColor(result),
      backgroundColor: '#969696',
    }

    return (
      <div key={i} className="centeredContainer">
        {letters}
        <div style={resultStyles} key={`res${i}`}>
          {result == 6 ? 'Win!' : result}
        </div>
      </div>
    )
  }

  const currentGuessRow = letterRow(currentGuess, null, guessResults.length)

  return (
    <>
      {guessResults.map((gr, i) => letterRow(gr.guess, gr.result, i))}
      {(guessResults.length == 0 ||
        guessResults[guessResults.length - 1].result != 6) &&
        currentGuessRow}
    </>
  )
}

interface Props {
  guessResults: GuessResult[]
  currentGuess: string
}

export default GameBoard
