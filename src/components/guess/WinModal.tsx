import React from 'react'
import { selectors } from '../../features/game'
import { useSelector } from 'react-redux'
import Modal from '../common/Modal'
import { centeredContainerCss, strongTextCss } from '../../styles/gameStyles'

const WinModal: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const mysteryWord = useSelector(selectors.getMysteryWord)
  const numGuesses = useSelector(selectors.getNumberGuesses)

  const body = (
    <>
      <div className={`${centeredContainerCss} px1`}>
        <div className="modalHeader">
          You won in {numGuesses} {numGuesses == 1 ? 'guess' : 'guesses'}!
        </div>
      </div>
      <div className={strongTextCss.toString()}>
        The word was {mysteryWord.toUpperCase()}
      </div>
    </>
  )

  return <Modal body={body} isOpen={isOpen} setIsOpen={setIsOpen} />
}

interface Props {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export default WinModal
