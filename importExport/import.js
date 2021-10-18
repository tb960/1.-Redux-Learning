import {sayHi, sayBye} from './export.js';
import {reducer} from './reducers.js'
import {buyCake} from './actions.js'

sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!

reducer(buyCake);