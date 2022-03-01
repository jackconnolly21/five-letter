import { GUESS_WORD } from './actions'

interface GuessWordAction {
  type: typeof GUESS_WORD
}
export type GuessActionTypes = GuessWordAction

export interface GuessResult {
  guess: string,
  result: number,
}

export interface GuessState {
  guess: {
    word: string
    count: number
    guesses: GuessResult[]
  }
}
