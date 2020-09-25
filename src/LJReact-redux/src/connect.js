import React,{Component} from 'react';
import propTypes from 'prop-types';
import {actionCreatorsBind} from './util'
export default function connect(mapStateToProps,mapDispatchToProps) {
    return function(WrapComponent) {
     
        return class WrapperComponent extends Component{
            static contextTypes = {
                store:propTypes.object
            }
            constructor(props) {
                super(props);
                this.state = {};
                this.mapStateAndDispatch = this.mapStateAndDispatch.bind(this);
            }
            render() {
               return (<WrapComponent {...this.state}/>)
            }
            componentDidMount() {
                const {store} = this.context;
                this.store = store;
                this.mapStateAndDispatch();
                store.subscribe(this.mapStateAndDispatch)
            }
            mapStateAndDispatch() {
                const mapState = mapStateToProps(this.store.getState());
                const mapDispatch = actionCreatorsBind(mapDispatchToProps,this.store.dispatch);
                this.setState(()=>({
                    ...this.state,
                    ...mapState,
                    ...mapDispatch
                }));
            }
        }
    };
}

/**
 * 那么问题来了 
 * 1.怎么把mapState 以及 mapDispatch 返回的值 包裹进props  以及mapDispatch有可能是对象也可能是函数
 * 2.触发更新
 */