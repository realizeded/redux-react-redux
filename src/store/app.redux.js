/* import {createStore} from 'redux'; */
import {createStore,applyMiddleWare} from '../lib/LJredux/src/redux';
import thunk from '../lib/redux-thunk/src/index';
import arrThunk from '../lib/arr-thunk/src/index';
//action creators
export const delayAdd = function() {
    return dispatch=>{
        setTimeout(()=>{
            dispatch({
                type:'ADD'
            });
        },2000)
    }; 
}
export const delayAdds = function() {
    return dispatch=>{
        dispatch([{
            type:'ADD'
        },{
            type:'ADD'
        }]);
    }; 
}
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
const store = createStore(reducer,applyMiddleWare([thunk,arrThunk]));
export default store;