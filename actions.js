//define a string constant which represent the type of the action
const BUY_CAKE = 'BUY_CAKE';

//define our action, where action is an object that have a type property
//you can have other property in this action object also other than type

{
    type: BUY_CAKE
    info: "First redux action"
}

//action creator
//action creator is a function that return an action

export const buyCake = function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

//why do we need an action creator when we making an action object?
