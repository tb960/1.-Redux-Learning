import { reducer } from './reducers.js';
import { buyCake } from './actions.js';

import redux from 'redux';

const createStore = redux.createStore;

const store = createStore(reducer)
console.log("Initial State", store.getState());

//if we never call subscribe() on the store we also cannot update the state
const unsubscribe = store.subscribe(() => {
    console.log("Updated state", store.getState());
});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());


unsubscribe();
//if unsubscribe then we cannot update the state anymore
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

store.subscribe(() => {
    console.log("Updated state", store.getState());
});

store.dispatch(buyCake());

//the flow, first we use createStore in redux to create a store
//to create a store, we need to pass in a reducer, in where inside the reducer function we have a initial state
//passed in
//after we create the store we will be exposed to functin such as getState(), dispatch() and subscribe()
//In order for us to update the state, we need to call the subscribe() function on the store
//if in any other case we might end up unsubscribe the subscription on the store, then we store the subscribe function in a 
//very weird case on this code, i dont understand why
//can look into it.