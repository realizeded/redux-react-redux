import react,{Component} from 'react';
import propTypes from 'prop-types';
class Provide extends Component {
    static childContextTypes = {
        store:propTypes.object
    }
    getChildContext() {
        return {store:this.props.store};
    }
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return this.props.children;
    }
}
export default Provide; 