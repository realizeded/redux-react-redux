

export default function Actuator(middleWares) {
    return createStore=>reducer=>{
        const store = createStore(reducer);
        let dispatch = store.dispatch;
        const getState = store.getState;
        const midApi = {
            getState,
            dispatch:(...args)=>dispatch(...args)
        };
        //  dispatch = middleWare(midApi)(dispatch);
        const middleWaresChain = middleWares.map(middleWare=>middleWare(midApi));
        dispatch = compose(middleWaresChain)(dispatch);
        return {...store,dispatch};
    };
}
function compose(middleWaresChain) {
    if(middleWaresChain.length===0) {
        return (...args)=>args;
    }
    if(middleWaresChain.length===1) {
        return middleWaresChain[0];
    }
    return middleWaresChain.reduce((pre,cur)=>(...args)=>pre(cur(...args)));
}