//import { buyCake } from "./import";

//assume your state only have one numberOfCakes which is a numeric value
const initialState = {
    numOfCakes: 10,
}

//pass this initialState as an argument to the reducer function
//the state need to have an initial Value, or we can just specified state and 
//we pass in previous State when we call the recuder
const reducer = (state = initialState, action) => {
    //in the function body we can have a switch function, where it will execute based
    //on the action.type
    //then in each case, we are not mutating the state object,
    //we just return a new state object, which is a copy of the old state
    switch(action.type){
        //here we need to make the 'BUY_CAKE' string first, unless we have one more separate file for all 
        //constant, if not then we cannot access the constant globally
        case 'BUY_CAKE': return {
            //But in reality, your state might contain more than one property
            //example your state might be 
            // state = {
            //     numOfCakes: 10,
            //     numOfMango: 10,
            //     numOfIceCream: 5
            // }
            //so to make sure other state do not change while we manipulating only one of the state property,
            //we use spread operators.
            ...state,
            numOfCakes: state.numOfCakes-1
        }
        default: return state
    }
}

export {reducer};