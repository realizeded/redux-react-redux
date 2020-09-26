export default ({dispatch,getState})=>next=>action=>{
    if(Array.isArray(action)) {
       return action.forEach(v=>{
            dispatch(v);
       });
    }
    next(action);
};