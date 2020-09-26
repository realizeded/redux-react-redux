export function actionCreatorsBind(mapDispatchToProps,dispatch) {
    let type = typeof mapDispatchToProps;
    if(type==='object') {
        return actionCreateObject(mapDispatchToProps,dispatch);
    }
    return actionCreateMethod(mapDispatchToProps,dispatch);
}
function actionCreateMethod(mapDispatchToProps,dispatch) {
    return mapDispatchToProps(dispatch);
}
function actionCreateObject(mapDispatchToProps,dispatch) {
    
    return Object.keys(mapDispatchToProps).reduce((t,v)=>{
        t[v] = ()=>dispatch(mapDispatchToProps[v]());
        return t;
    },{})
}