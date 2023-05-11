import { combineReducers } from 'redux'

import { books } from './reducers'

export default (history) => combineReducers({
  books
});