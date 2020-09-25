/* import {createStore} from 'redux'; */
import {createStore} from '../LJredux/src/redux';
const defaultState = {};
const reducer = function(state=defaultState,action) {
    console.log(action)
    return state;
};
const store = createStore(reducer);
export default store;