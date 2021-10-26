import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';

const HooksCakeContainer = () => {
    //what you done here is, when you import useSelector, it connect to the store in the redux store
    //then you can access the current state in the redux store
    //but lets say if you have a combined reducer, then you probably need to access the state
    //by state.cake.numOfCakes...
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    //the use dispatch hook return a function from the redux dispatch function
    const dispatch = useDispatch();

    return(
        <div>
            <h2>(Selectors) Number of cakes - {numOfCakes}</h2>
            <button onClick ={()=>dispatch(buyCake())}>Buy Cake</button>
        </div>
    );
}

export default HooksCakeContainer;