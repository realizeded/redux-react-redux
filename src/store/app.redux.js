/* import {createStore} from 'redux'; */
import {createStore} from '../LJredux/src/redux';
const defaultState = {
    num:0
};
const reducer = function(state=defaultState,action) {
    if(action.type==='ADD') {
        return {
            num:state.num+1
        }
    }
    return state;
};
const store = createStore(reducer);
export default store;