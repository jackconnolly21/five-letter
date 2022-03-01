/* eslint-disable @typescript-eslint/default-param-last */

import { GUESS_WORD } from './actions'
import { GuessActionTypes, GuessResult } from './types'

const initialState = {
	word: 'raise',
	count: 1,
	guesses: [] as GuessResult[],
}

export default (state = initialState, action: GuessActionTypes) => {
	switch (action.type) {
		case GUESS_WORD:
			var guess: GuessResult = { guess: 'word', result: 0 }
			return { ...state, count: state.count + 1, guesses: state.guesses.push(guess) }
		default:
			return state
	}
}
