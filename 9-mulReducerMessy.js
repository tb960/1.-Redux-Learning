import redux from 'redux';

const createStore = redux.createStore;

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
        info: 'buy an ice cream'
    }
}

//reducer

const initialState = {
    numOfCakes : 10,
    numOfIceCream: 9
}

const iceCreamReducer = (state = initialState, actions) => {
    switch(actions.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes -1
        }

        case BUY_ICECREAM: return{
            ...state,
            numOfIceCream: state.numOfIceCream -1
        }

        default: return state
    }
}

const store = createStore(iceCreamReducer);
const unsubscribe = store.subscribe(()=>{
    console.log('Updated state', store.getState());
})

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());