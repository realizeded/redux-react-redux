import React,{Component} from 'react';
import store from './store/app.redux';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(()=>{console.log(1)});
        store.dispatch({type:'mike1'});
        store.dispatch({type:'mike2'});
        store.dispatch({type:'mike3'});
    }
    render() {
        return (<div>LJRedux</div>);
    }
}
export default App;