import { fiveLetterWords } from '../../dicts/five'
import { mysteryWords } from '../../dicts/mystery'
import { mysteryOrder } from '../../dicts/mysteryOrder'

// April 1st
const firstDate = new Date(2022, 3, 1)

export const getGameNumber = () => {
  const today = new Date()
  const dateDiff = (today.getTime() - firstDate.getTime()) / (1000 * 3600 * 24)
  return Math.floor(dateDiff)
}

export const getDailyMysteryWord = () => {
  const index = mysteryOrder[getGameNumber()]
  return mysteryWords[index]
}

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
  guess = guess.toLowerCase()
  if (guess.length != 5) {
    return { isValid: false, errorMessage: 'Guess must be 5 letter word' }
  }
  if (guess.search(/[^a-z]/) != -1) {
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
