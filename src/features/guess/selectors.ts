import { GuessState } from './types'

export const getMysteryWord = (state: GuessState) => state.guess.word

export const getNumberGuesses = (state: GuessState) => state.guess.count

export const getPastGuesses = (state: GuessState) => state.guess.guesses