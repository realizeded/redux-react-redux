import applyMiddleWare from './applyMiddleWare';

function createStore(reducer,Actuator) {
    if(Actuator) {
        return Actuator(createStore)(reducer);
    }
    let currentState;
    let listener = [];
    function getState() {
      
        return currentState;
    }
    function subscribe(listen) {
        listener.push(listen);
    }
    function dispatch(action) {
        currentState = reducer(currentState,action);
        listener.map(v=>v());
        return action;
    }
    dispatch({type:'@LJRedux/INIT'});
    return {getState,subscribe,dispatch};
}
export {
    createStore,
    applyMiddleWare
}