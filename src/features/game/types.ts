import { GUESS_WORD, RESET_GAME } from './actions'

export interface GuessResult {
  guess: string
  result: number
}

interface GuessWordAction {
  type: typeof GUESS_WORD
  payload: GuessResult
}

interface ResetGameAction {
  type: typeof RESET_GAME
}

export type GameActionTypes = GuessWordAction | ResetGameAction

export interface GameState {
  guess: {
    mystery: string
    count: number
    guesses: GuessResult[]
  }
}
