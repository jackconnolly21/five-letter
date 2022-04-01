import React from 'react'
import { GuessResult } from '../../features/game/types'
import {
  centeredContainerCss,
  getLetterBoxStyles,
} from '../../styles/gameStyles'
import { validateGuess } from './helpers'

const GameBoard: React.FC<Props> = ({ guessResults, currentGuess }) => {
  const getResultColor = (result: number | null) => {
    if (result == null) {
      return 'black'
    }

    if (result == 0) {
      return 'red'
    } else if (result <= 3) {
      return 'blue'
    } else {
      return 'green'
    }
  }

  const letterRow = (guess: string, result: number | null, i: number) => {
    if (guess.length > 5) {
      console.log('Error: Word length greater than 5')
    }

    // For current guess color red if invalid
    const letterColor =
      guess.length == 5 && result == null && !validateGuess(guess).isValid
        ? 'red'
        : '#fff'
    const letterStyles = getLetterBoxStyles(letterColor, '#444')
    const letters = [0, 1, 2, 3, 4].map((idx) => (
      <div className={letterStyles.toString()} key={idx}>
        {idx < guess.length ? guess[idx].toUpperCase() : null}
      </div>
    ))

    const resultStyles = getLetterBoxStyles(getResultColor(result), '#969696')

    return (
      <div key={i} className={centeredContainerCss.toString()}>
        {letters}
        <div className={resultStyles.toString()} key={`res${i}`}>
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
