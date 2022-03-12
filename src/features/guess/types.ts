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

export type GuessActionTypes = GuessWordAction | ResetGameAction

export interface GuessState {
  guess: {
    mystery: string | null
    count: number
    guesses: GuessResult[]
  }
}
