/* eslint-disable @typescript-eslint/default-param-last */

import { LOAD_DICTIONARY, LOAD_MYSTERY } from './actions'
import { DictionaryActionTypes } from './types'

const initialState = {
  fiveLetterWords: [] as string[],
  mysteryWords: [] as string[],
}

export default (state = initialState, action: DictionaryActionTypes) => {
  switch (action.type) {
    case LOAD_DICTIONARY:
      return { ...state, fiveLetterWords: [] as string[] }
    case LOAD_MYSTERY:
      return { ...state, mysteryWords: [] as string[] }
    default:
      return state
  }
}
