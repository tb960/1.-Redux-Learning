//spread operators on array and object
//more at website
//https://www.educative.io/edpresso/what-is-the-spread-operator-in-javascript
const state = {
    numOfCakes: 10,
    numOfSohai: 5,
    numOfCokes: 6
}

const newState = {
    ...state,
    numOfCakes: 9,
    numOfSVG: 5
}

Object.keys(state).forEach((key) =>{
    console.log(key, state[key]);
});

console.log("Above is the old state: ");

//How to loop through an object with key in javascript
Object.keys(newState).forEach((key) =>{
    console.log(key, newState[key]);
});

//or you can use this syntax
for(var key in newState){
    console.log(newState[key]);
}

//more at 
//https://stackoverflow.com/questions/921789/how-to-loop-through-a-plain-javascript-object-with-the-objects-as-members
