import React,{Component} from 'react';
import Show from './components/Show';
import {Provide} from './LJReact-redux/src/index';
import store from './store/app.redux'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (<div>
            <Provide store={store}>
            <Show/>
            </Provide>
        </div>);
    }
}
export default App;