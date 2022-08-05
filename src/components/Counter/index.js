import React, { PureComponent } from "react";
import { PropTypes } from "prop-types";
const styles = {
  border: "1px solid red",
  backgroundColor: "pink",
  textAlign: "center",
};
class Counter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState((state, props) => ({ count: state.count + props.step }));
  };
  decrement = () => {
    this.setState((state, props) => ({ count: state.count - props.step }));
  };
  render() {
    console.log(1)
    const { count } = this.state;
    const { step } = this.props;
    return (
      <div style={styles}>
        <h2>Count: {count}</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={()=>{ this.setState({count:5})}}>set value 5</button>
        <h2>Step: {step}</h2>
      </div>
    );
  }
}

Counter.defaultProps = {
  step: 1,
};

Counter.propTypes = {
  step: PropTypes.number,
};

export default Counter;

