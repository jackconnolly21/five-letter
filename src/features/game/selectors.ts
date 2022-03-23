import { GameState } from './types'

export const getMysteryWord = (state: GameState) => state.guess.mystery

export const getNumberGuesses = (state: GameState) => state.guess.count

export const getPastGuesses = (state: GameState) => state.guess.guesses
