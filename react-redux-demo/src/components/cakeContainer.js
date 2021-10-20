import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux/';

const CakeContainer = (props) => {
    return(
        <div>
            <h2>Number of cakes {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    );
}

//or use react selector
//if you have large project you might separate this into a separate file
//where in the file will be logic for selecting state.cake.numof...
const mapStateToProps = (state) =>{
    return{
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        buyCake : () => dispatch(buyCake())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer);