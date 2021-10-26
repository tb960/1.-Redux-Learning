import { createStore } from 'redux'
import cakeReducer from './cake/cakeReducer.js'
import iceCreamReducer from './iceCream/iceCreamReducer.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});

const store = createStore(rootReducer);

export default store