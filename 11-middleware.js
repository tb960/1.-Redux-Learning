import redux from 'redux';
//middleware import
import reduxLogger from 'redux-logger';
//middleware import

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

//middleware const funtion
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
//middleware const function

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

//pass in second parameters applyMiddleware into createStore function and the middleware you want
//what if you want to use several middleware for redux?
//you can pass in as many middleware as your function require to the applyMiddleware function
//pass the root reducer into the createStore function
const store = createStore(rootReducer, applyMiddleware(logger));
//pass in second parameters into createStore function for middleware

//testing on the store
console.log("Initial State", store.getState());

//if you only want to get the cake state in the store
//console.log("Initial State on ice cream", store.getState().iceCream);

//using middleware, in the subscribe function you dont need to have log statement inside 
const unsubscribe = store.subscribe(() =>{});
//using middleware, in the subscribe function you dont need to have log statement inside 

store.dispatch(buyCake());
store.dispatch(buyIceCream());

unsubscribe();