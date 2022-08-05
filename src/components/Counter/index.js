import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
const styles = {
  border:'1px solid red',
  backgroundColor:'pink',
  textAlign:'center'
}
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count:0
    }
  }
  increment = ()=>{this.setState((state, props)=>({count:state.count+props.step}))}
  decrement = ()=>{this.setState((state, props)=>({count:state.count-props.step}))}
  shouldComponentUpdate(nextProps){
    return nextProps.step===this.props.step;
  }
  render() {
    const {count} = this.state;
    return (
      <div style={styles}>
        <h2>Count: {count}</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>       
      </div>
    );
  }
}

Counter.defaultProps = {
  step:1
}

Counter.propTypes = {
  step: PropTypes.number
}

export default Counter;
