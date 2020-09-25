import React,{Component} from 'react';
import store from '../../store/app.redux';
import propTypes from 'prop-types';
import {connect} from '../../LJReact-redux/src/index';
class Show extends Component {

    constructor(props,context) {
        
        super(props,context);
       
       /*  this.state = store.getState();
        store.subscribe(()=>this.setState(()=>store.getState())); */
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.handleClick();
    }
    render() {
      return (<div>
            {this.props.num}
            <input type="button" value="加1" onClick={this.handleClick}/>
        </div>);
    }
}
const mapStateToProps = function(state) {
    return {
        num:state.num
    };
}
const mapDispatchToProps = function(dispatch) {
    return {
        handleClick() {
            const action = {
                type:'ADD'
            };
            dispatch(action);
        }
    };
}
function handleClick() {
    return {
        type:'ADD'
    };
}
/* export default connect(mapStateToProps,mapDispatchToProps)(Show); */
export default connect(mapStateToProps,{handleClick})(Show);