/* eslint-disable @typescript-eslint/default-param-last */

import { generateMysteryWord } from '../../components/guess/helpers'
import { GUESS_WORD, RESET_GAME } from './actions'
import { GuessActionTypes, GuessResult } from './types'

const initialState = {
  mystery: generateMysteryWord(),
  count: 0,
  guesses: [] as GuessResult[],
}

export default (state = initialState, action: GuessActionTypes) => {
  switch (action.type) {
    case GUESS_WORD:
      return {
        ...state,
        count: state.count + 1,
        guesses: state.guesses.concat(action.payload),
      }
    case RESET_GAME:
      return {
        mystery: generateMysteryWord(),
        guesses: [] as GuessResult[],
        count: 0,
      }
    default:
      return state
  }
}
