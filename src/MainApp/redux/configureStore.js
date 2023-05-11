import { legacy_createStore as createStore } from 'redux';
import createRootReducer from './rootReducer';

// Define on your own as per requirment
const initialState = {};

const store = createStore(createRootReducer(), initialState);
export default store;
