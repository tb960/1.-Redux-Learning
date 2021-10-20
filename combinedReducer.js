import redux from 'redux';

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

//actions
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

const buyCake = () =>{
    return{
        type: BUY_CAKE,
        info: 'buy a cake'
    }
}

const buyIceCream = () =>{
    return{
        type: BUY_ICECREAM,
        info: 'buy an icecream'
    }
}

//reducer
const initialCakeState = {
    numOfCakes : 10
}

const initialIceCreamState = {
    numOfIceCream: 9
}

const cakeReducer = (state = initialCakeState, actions) =>{
    switch(actions.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes-1
        }
        default: return state
    }
}

const icecreamReducer = (state = initialIceCreamState, actions) =>{
    switch(actions.type){
        case BUY_ICECREAM: return{
            ...state,
            numOfIceCream: state.numOfIceCream-1
        }
        default: return state
    }
}

//combine all the reducer into one root reducer only
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: icecreamReducer
});
//pass the root reducer into the createStore function
const store = createStore(rootReducer);

//testing on the store
console.log("Initial State", store.getState());

//if you only want to get the cake state in the store
//console.log("Initial State on ice cream", store.getState().iceCream);

const unsubscribe = store.subscribe(() =>{
    console.log('Updated state', store.getState());
});

store.dispatch(buyCake());
store.dispatch(buyIceCream());

unsubscribe();








//questions is how to  store all the constant and how to store all the initial state?

