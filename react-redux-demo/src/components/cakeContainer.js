import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux/';
import { useState } from 'react';

const CakeContainer = (props) => {
    const [number, setNumber] = useState("hello");

    const message = () =>{
        console.log(number);
    }
    return(
        <div>
            <h2>Number of cakes {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
            <button onClick={message}>log Button</button>
        </div>
    );
}

//or use react selector
//if you have large project you might separate this into a separate file
//where in the file will be logic for selecting state.cake.numof...
const mapStateToProps = (state) =>{
    return{
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        buyCake : () => dispatch(buyCake())
    }
}

//this export will connect us to the store in the main App.js file
//when we export, we connect the map states to props and map Dispatch to props to the store
//the store originally will have the state but the action is not inside the store
//hence we need to import the action creator here and map the action to the dispacth function and pass to the store through connect
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer);