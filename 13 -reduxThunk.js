import redux from 'redux';
import ReduxThunk from 'redux-thunk'
import axios from 'axios';

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
//why do we need to add a default on thunkMiddleware?
const thunkMiddleware = ReduxThunk.default;

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

//actions creator
const fetchUserRequest = () =>{
    return{
        type: FETCH_USERS_REQUEST
    }
}

//thie action creator have an input call user
//where this user will contain the payload fetch from the website
//how do we have this payload passed to this action creators?
const fetchUserSuccess = (users) =>{
    return{
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUserFailure = (errorMsg) =>{
    return{
        type: FETCH_USERS_FAILURE,
        payload: errorMsg
    }
}

//reducer
const reducer = (state = initialState, actions) =>{
    switch(actions.type){
        case FETCH_USERS_REQUEST: return{
            ...state,
            loading: true
        }
        case FETCH_USERS_SUCCESS: return{
            loading: false,
            users: actions.payload,
            error: ''
        }
        case FETCH_USERS_FAILURE: return{
            loading: false,
            users: [],
            error: actions.payload
        }
        default: return state
    }
}

//redux thunk allow our function creator not only return and object
//but it also allow the action creator to return a function
//where we can make async function call via this action creator, side effect
//the function we return can also dispatch action (which mean it call another function)
const fetchUsers = () =>{
    return function(dispatch){
        dispatch(fetchUserRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            //what we want to do with the reponse?
            const users = response.data.map(user => user.id);
            dispatch(fetchUserSuccess(users));
        })
        .catch(error => {
            //what we want to do with the errors?
            dispatch(fetchUserFailure(error.message));
        });
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(()=>{console.log('Updated state',store.getState())});
store.dispatch(fetchUsers());
