import { fiveLetterWords } from '../../dicts/five'
import { mysteryWords } from '../../dicts/mystery'

export const generateMysteryWord = () => {
  const randomIndex = Math.floor(Math.random() * mysteryWords.length)
  return mysteryWords[randomIndex]
}

export const getScore = (guess: string, mystery: string) => {
  if (guess == mystery) {
    return 6 // Represents winning
  }

  const lettersInGuess = new Set(guess.split(''))
  const lettersInMystery = new Set(mystery.split(''))

  const countInCommon = new Set(
    Array.from(lettersInGuess).filter((c) => lettersInMystery.has(c))
  ).size

  return countInCommon
}

const isInDictionary = (guess: string) => {
  const index = fiveLetterWords.findIndex((w) => w == guess)
  return index != -1
}

export const validateGuess = (guess: string) => {
  if (guess.length != 5) {
    return { isValid: false, errorMessage: 'Guess must be 5 letter word' }
  }
  if (guess.search(/[^A-Za-z]/) != -1) {
    return { isValid: false, errorMessage: 'Guess must only contain letters' }
  }
  if (!isInDictionary(guess)) {
    return { isValid: false, errorMessage: `${guess} not in dictionary` }
  }
  return { isValid: true, errorMessage: null }
}

export interface ValidationResult {
  isValid: boolean
  errorMessage: string | null
}
