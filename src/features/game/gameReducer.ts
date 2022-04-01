/* eslint-disable @typescript-eslint/default-param-last */

import {
  generateMysteryWord,
  getDailyMysteryWord,
} from '../../components/guess/helpers'
import { GUESS_WORD, NEW_DAILY_GAME, NEW_PRACTICE_GAME } from './actions'
import { GameActionTypes, GuessResult } from './types'

const initialState = {
  mystery: getDailyMysteryWord(),
  count: 0,
  guesses: [] as GuessResult[],
}

export default (state = initialState, action: GameActionTypes) => {
  switch (action.type) {
    case GUESS_WORD:
      return {
        ...state,
        count: state.count + 1,
        guesses: state.guesses.concat(action.payload),
      }
    case NEW_PRACTICE_GAME:
      return {
        mystery: generateMysteryWord(),
        guesses: [] as GuessResult[],
        count: 0,
      }
    case NEW_DAILY_GAME:
      return {
        mystery: getDailyMysteryWord(),
        guesses: [] as GuessResult[],
        count: 0,
      }
    default:
      return state
  }
}
