import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'

export const Rules: React.FC = () => {
  const history = useHistory()

  return (
    <Fragment>
      <h1>Rules</h1>

      <h4>How to play Five Letter Word Game:</h4>
      <ol type="1">
        <li>
          The object of the game is to guess the mystery word in as few guesses
          as possible. This word is randomly picked by the computer.
        </li>
        <li>
          Guess this word by guessing other 5 letter words. You will be told the
          number of letters in common between your guess and the mystery word.
          <br />
          <i>
            (Note: If there are two of one letter in your guess, that would be
            equivalent to a score of one - i.e. trees returns 1 if only e is in
            the mystery word)
          </i>
        </li>
        <li>
          Continue to guess, determining which letters are in the word and which
          aren't.
        </li>
        <li>
          Once you guess the hidden word head over to the highscores table to
          see where you stand.
        </li>
      </ol>

      <h4>Useful Hints:</h4>
      <ol>
        <li>
          The mystery word will contain five unique letters (no duplicates)
        </li>
        <li>
          Use the text box to keep track of which letters are in/not in the
          word.
        </li>
        <li>
          Sometimes zero letters in common is good! This allows you to narrow
          down the list of possible letters.
        </li>
        <li>
          Try guessing words with repeated letters - it gives the same benefit
          as using letters you know aren't in the word.
        </li>
        <li>
          Try deleting letters from the alphabet (i.e. the text box) that you
          know aren't in the word.
        </li>
      </ol>

      <button
        type="button"
        className="btn"
        cy-data="go-back-button"
        onClick={() => history.push('/')}
      >
        Go back
      </button>
    </Fragment>
  )
}
