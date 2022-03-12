import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { selectors } from '../../features/guess'
import { Card } from '../common'
import GuessRow from './GuessRow'

const GuessesTable: React.FC = () => {
  const guesses = useSelector(selectors.getPastGuesses)

  const title = 'Past Guesses'
  const guessRows = guesses.map((guess, index) => (
    <GuessRow result={guess} index={index} />
  ))

  const table = (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Guess</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>{guessRows}</tbody>
    </table>
  )
  return (
    <Fragment>
      {guesses.length > 0 && <Card title={title} body={table} />}
    </Fragment>
  )
}

export default GuessesTable
