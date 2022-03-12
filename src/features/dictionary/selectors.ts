import { DictionaryState } from './types'

export const getFiveLetterWords = (state: DictionaryState) =>
  state.dictionary.fiveLetterWords

export const getMysteryWords = (state: DictionaryState) =>
  state.dictionary.mysteryWords
