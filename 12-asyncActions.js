import redux from 'redux';

const createStore = redux.createStore;

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

const store = createStore(reducer);