import React, { useEffect } from 'react'
import {
  halfFlexCss,
  keyboardCss,
  keyRowButtonCss,
  keyRowCss,
  oneAndAHalfFlexCss,
} from '../../styles/keyboardStyles'

const Keyboard: React.FC<Props> = ({ handleKeyPress, currentGuess }) => {
  const firstRow = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
  const secondRow = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
  const thirdRow = ['z', 'x', 'c', 'v', 'b', 'n', 'm']

  // Handle input from keyboard
  const handleKeyboardPress = (ev: KeyboardEvent) => {
    if (ev.key == 'Enter') {
      handleKeyPress('↵')
    } else if (ev.key == 'Backspace') {
      handleKeyPress('←')
    } else if (ev.key.length == 1 && ev.key.search(/[^A-Za-z]/) == -1) {
      handleKeyPress(ev.key)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyboardPress)
    return () => {
      window.removeEventListener('keydown', handleKeyboardPress)
    }
  }, [currentGuess])

  const toButton = (keyValue: string) => {
    return (
      <button
        className={keyRowButtonCss.toString()}
        key={keyValue}
        onClick={() => handleKeyPress(keyValue)}
      >
        {keyValue}
      </button>
    )
  }

  return (
    <>
      <div id="keyboard" className={keyboardCss.toString()}>
        <div className={keyRowCss.toString()}>{firstRow.map(toButton)}</div>

        <div className={keyRowCss.toString()}>
          <div className={`spacer ${halfFlexCss}`}></div>
          {secondRow.map(toButton)}
          <div className={`spacer ${halfFlexCss}`}></div>
        </div>

        <div className={keyRowCss.toString()}>
          <button
            onClick={() => handleKeyPress('↵')}
            className={`${keyRowButtonCss} ${oneAndAHalfFlexCss}`}
          >
            enter
          </button>
          {thirdRow.map(toButton)}
          <button
            onClick={() => handleKeyPress('←')}
            className={`${keyRowButtonCss} ${oneAndAHalfFlexCss}`}
          >
            ←
          </button>
        </div>
      </div>
    </>
  )
}

interface Props {
  handleKeyPress: (c: string) => void
  currentGuess: string
}

export default Keyboard
