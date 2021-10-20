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
    }
}

const icecreamReducer = (state = initialIceCreamState, actions) =>{
    switch(actions.type){
        case BUY_ICECREAM: return{
            ...state,
            numOfIceCream: state.numOfIceCream-1
        }
    }
}

//questions is how to  store all the constant and how to store all the initial state?

