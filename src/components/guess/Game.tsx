import React, { Fragment, useState } from 'react'
import ReactModal from 'react-modal'
import { useSelector, useDispatch } from 'react-redux'
import { actions, selectors } from '../../features/guess'
import { Button } from '../common'
import { getScore, validateGuess } from './helpers'
import LetterBoard from './LetterBoard'

const Game: React.FC = () => {
  const guessNumber = useSelector(selectors.getNumberGuesses)
  const mysteryWord = useSelector(selectors.getMysteryWord)
  const numGuesses = useSelector(selectors.getNumberGuesses)
  const pastGuesses = useSelector(selectors.getPastGuesses)

  const dispatch = useDispatch()

  const [guess, setGuess] = useState('')
  const [isLocked, setIsLocked] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }

  const handleGuess = () => {
    const validationResult = validateGuess(guess)
    if (validationResult.isValid) {
      const score = getScore(guess, mysteryWord)
      if (score == 6) {
        setIsLocked(true)
        alert(`You won in ${numGuesses + 1} guesses! The word was ${guess}.`)
      }

      dispatch({
        type: actions.GUESS_WORD,
        payload: { guess, result: score },
      })

      setGuess('')
    } else {
      alert(validationResult.errorMessage)
    }
  }

  const handleGuessInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value

    // Don't allow non-alpha characters or guesses longer than 5
    if (newValue.length > 5 || newValue.search(/[^A-Za-z]/) != -1) {
      return
    }

    // Passed preliminary validations
    setGuess(e.target.value)
  }

  const newGame = () => {
    setGuess('')
    setIsLocked(false)
    setShowAnswer(false)
    dispatch({ type: actions.RESET_GAME })
  }

  return (
    <Fragment>
      <div className="padded centeredContainer">
        <div className="inline">
          <Button title="New Game" action={newGame} color="blue" />
        </div>

        <div className="inline">
          <Button
            title="Show Answer"
            action={() => {
              setShowAnswer(!showAnswer)
              setIsLocked(true)
            }}
            color="blue"
          />
        </div>

        {/* <div className="inline">
          <Button title="Open Modal" action={() => setIsModalOpen(true)} />
        </div> */}
      </div>

      <div className="centeredContainer padded">
        {showAnswer && (
          <div>
            <b>The word was {mysteryWord.toUpperCase()}</b>
          </div>
        )}
      </div>

      <LetterBoard guessResults={pastGuesses} />

      <div className="centeredContainer">
        <div className="card grey">
          <div className="card-content white-text">
            <span className="card-title">{`Guess #${guessNumber + 1}`}</span>
            {
              <input
                type="text"
                value={guess}
                name="guess"
                onChange={handleGuessInput}
                disabled={isLocked}
              />
            }

            <div className="centeredContainer">
              <div>
                {
                  <Button
                    title="Guess"
                    action={handleGuess}
                    isDisabled={isLocked}
                    color="green"
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="You Win!"
        style={customStyles}
      >
        <h2>You're a winner!</h2>
        <div>I am a modal</div>
        <Button title="X Close" action={() => setIsModalOpen(false)} />
      </ReactModal>
    </Fragment>
  )
}

export default Game
