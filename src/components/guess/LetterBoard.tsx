import React, { Fragment } from 'react'
import { GuessResult } from '../../features/guess/types'

const LetterBoard: React.FC<Props> = ({ guessResults }) => {
  const getResultColor = (result: number) => {
    if (result == 0) {
      return 'red'
    } else if (result <= 3) {
      return 'blue'
    } else {
      return 'green'
    }
  }

  const boxStyles = (color?: string, backgroundColor?: string) => {
    return {
      backgroundColor: backgroundColor ?? '#444',
      color: color ?? '#fff',
      border: '2px solid #969696',
      height: 50,
      padding: 5,
      width: 50,
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
    }
  }

  const letterRow = (guessResult: GuessResult, i: number) => {
    if (guessResult.guess.length > 5) {
      console.log('Error: Word length greater than 5')
    }

    const letters = guessResult.guess.split('').map((c, idx) => (
      <div style={boxStyles()} key={idx}>
        {c.toUpperCase()}
      </div>
    ))

    return (
      <div key={i} className="centeredContainer">
        {letters}
        <div
          style={boxStyles(getResultColor(guessResult.result), '#969696')}
          key={`res${i}`}
        >
          {guessResult.result}
        </div>
      </div>
    )
  }

  return <Fragment>{guessResults.map((gr, i) => letterRow(gr, i))}</Fragment>
}

interface Props {
  guessResults: GuessResult[]
}

export default LetterBoard
