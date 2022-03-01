import { combineReducers, createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { GuessReducer } from './features/guess'

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  guess: GuessReducer,
})

const store = createStore(
  rootReducer,
  /* preloadedState, */ devToolsEnhancer({})
)

export default store
