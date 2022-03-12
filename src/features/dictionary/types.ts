import { LOAD_DICTIONARY, LOAD_MYSTERY } from './actions'

interface LoadDictionaryAction {
  type: typeof LOAD_DICTIONARY
}

interface LoadMysteryAction {
  type: typeof LOAD_MYSTERY
}

export type DictionaryActionTypes = LoadDictionaryAction | LoadMysteryAction

export interface DictionaryState {
  dictionary: {
    fiveLetterWords: string[]
    mysteryWords: string[]
  }
}
