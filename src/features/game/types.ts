import { GUESS_WORD, NEW_DAILY_GAME, NEW_PRACTICE_GAME } from './actions'

export interface GuessResult {
  guess: string
  result: number
}

interface GuessWordAction {
  type: typeof GUESS_WORD
  payload: GuessResult
}

interface NewPracticeGameAction {
  type: typeof NEW_PRACTICE_GAME
}

interface NewDailyGameAction {
  type: typeof NEW_DAILY_GAME
}

export type GameActionTypes =
  | GuessWordAction
  | NewPracticeGameAction
  | NewDailyGameAction

export interface GameState {
  guess: {
    mystery: string
    count: number
    guesses: GuessResult[]
  }
}
