import React, { useEffect } from 'react'

const Keyboard: React.FC<Props> = ({ handleKeyPress, currentGuess }) => {
  const firstRow = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
  const secondRow = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
  const thirdRow = ['z', 'x', 'c', 'v', 'b', 'n', 'm']

  // Handle input from keyboard
  const handleKeyboardPress = (ev: KeyboardEvent) => {
    // alert(`pressed ${ev.key}`)
    if (ev.key == 'Enter') {
      handleKeyPress('↵')
    } else if (ev.key == 'Backspace') {
      handleKeyPress('←')
    } else {
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
      <button key={keyValue} onClick={() => handleKeyPress(keyValue)}>
        {keyValue}
      </button>
    )
  }

  return (
    <>
      <div id="keyboard">
        <div className="keyRow">{firstRow.map(toButton)}</div>

        <div className="keyRow">
          <div className="spacer half"></div>
          {secondRow.map(toButton)}
          <div className="spacer half"></div>
        </div>

        <div className="keyRow">
          <button
            onClick={() => handleKeyPress('↵')}
            className="one-and-a-half"
          >
            enter
          </button>
          {thirdRow.map(toButton)}
          <button
            onClick={() => handleKeyPress('←')}
            className="one-and-a-half"
          >
            del
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
