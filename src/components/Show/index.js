import React,{Component} from 'react';
import store,{delayAdd,delayAdds} from '../../store/app.redux';
import propTypes from 'prop-types';
import {connect} from '../../lib/LJReact-redux/src/index';
class Show extends Component {

    constructor(props,context) {
        
        super(props,context);
       
       /*  this.state = store.getState();
        store.subscribe(()=>this.setState(()=>store.getState())); */
        this.handleClick = this.handleClick.bind(this);
        this.handleDelayClick = this.handleDelayClick.bind(this);
        this.handleArrClick = this.handleArrClick.bind(this);
    }
    handleClick() {
        this.props.handleClick();
    }
    handleDelayClick() {
        this.props.delayAdd();
    }
    handleArrClick() {
        this.props.delayAdds();
    }
    render() {
      return (<div>
            {this.props.num}
            <input type="button" value="加1" onClick={this.handleClick}/>
            <input type="button" value="delay加1" onClick={this.handleDelayClick}/>
            <input type="button" value="arr-thunk" onClick={this.handleArrClick}/>
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
export default connect(mapStateToProps,{handleClick,delayAdd,delayAdds})(Show);