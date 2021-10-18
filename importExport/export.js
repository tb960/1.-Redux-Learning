// 📁 say.js
function sayHi(user) {
    console.log(`Hello, ${user}!`);
  }
  
  function sayBye(user) {
    console.log(`Bye, ${user}!`);
  }

  function reducer(state,action){
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes-1
        }
        default: return state
    }
    console.log("exported");
}
  
  export {sayHi, sayBye, reducer}; // a list of exported variables