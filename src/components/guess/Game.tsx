/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actions, selectors } from '../../features/game'
import { Button } from '../common'
import Modal from '../common/Modal'
import { getScore, validateGuess } from './helpers'
import Keyboard from './Keyboard'
import GameBoard from './GameBoard'
import WinModal from './WinModal'
import {
  footerContainerCss,
  gameContainerCss,
  paddedContainerCss,
  paddedCss,
  strongTextCss,
} from '../../styles/gameStyles'

const Game: React.FC = () => {
  const mysteryWord = useSelector(selectors.getMysteryWord)
  const pastGuesses = useSelector(selectors.getPastGuesses)

  const dispatch = useDispatch()

  const [guess, setGuess] = useState('')
  const [isLocked, setIsLocked] = useState(false)

  // Modals
  const [isWinModalOpen, setIsWinModalOpen] = useState(false)
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleGuess = () => {
    const validationResult = validateGuess(guess)
    if (validationResult.isValid) {
      const score = getScore(guess, mysteryWord)
      if (score == 6) {
        setIsLocked(true)
        // Open winning modal
        setIsWinModalOpen(true)
      }

      dispatch({
        type: actions.GUESS_WORD,
        payload: { guess, result: score },
      })

      setGuess('')
    } else {
      setIsErrorModalOpen(true)
      setErrorMessage(validationResult.errorMessage)
    }
  }

  const handleKeyPress = (c: string) => {
    // If enter, call handleGuess
    if (c == '↵') {
      return handleGuess()
    }

    // Otherwise update guess
    const newValue =
      c == '←' ? (guess.length > 0 ? guess.slice(0, -1) : '') : guess + c

    // Don't allow non-alpha characters or guesses longer than 5 or if keyboard locked
    if (isLocked || newValue.length > 5 || newValue.search(/[^A-Za-z]/) != -1) {
      return
    }

    // Passed preliminary validations
    setGuess(newValue.toLowerCase())
  }

  const newGame = () => {
    setGuess('')
    setIsLocked(false)
    dispatch({ type: actions.NEW_DAILY_GAME })
  }

  return (
    <div className={gameContainerCss.toString()}>
      <div className={paddedCss.toString()}>
        {/* <div className={paddedContainerCss.toString()}>
          <Button title="New Game" action={newGame} color="blue" />
        </div> */}

        <GameBoard guessResults={pastGuesses} currentGuess={guess} />
      </div>

      <div className={footerContainerCss.toString()}>
        <Keyboard handleKeyPress={handleKeyPress} currentGuess={guess} />
      </div>

      <WinModal isOpen={isWinModalOpen} setIsOpen={setIsWinModalOpen} />
      <Modal
        body={<div className={strongTextCss.toString()}>{errorMessage}</div>}
        isOpen={isErrorModalOpen}
        setIsOpen={setIsErrorModalOpen}
      />
    </div>
  )
}

export default Game
