import React, { Fragment } from 'react'
import { GuessResult } from '../../features/guess/types'

const GuessRow: React.FC<Props> = ({ result, index }) => {
  const resultColorClass =
    result.result == 0
      ? 'classRed'
      : result.result <= 3
      ? 'classBlue'
      : 'classGreen'

  return (
    <Fragment>
      <tr key={result.guess}>
        <td>{index + 1}</td>
        <td>{result.guess.toUpperCase()}</td>
        <td>
          <div className={resultColorClass}>
            <b>{result.result == 6 ? 'Winner!' : result.result}</b>
          </div>
        </td>
      </tr>
    </Fragment>
  )
}

interface Props {
  result: GuessResult
  index: number
}

export default GuessRow
