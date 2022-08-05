import React, { Component } from "react";
import Counter from "../components/Counter";

class CounterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };
  }
  handlerRange = ({ target: { value } }) => {
    this.setState({ step: Number(value) });
  };
  render() {
    const { step } = this.state;
    return (
      <section>
        <h1>Counter</h1>
        <Counter step={step} />
        <input
          type="range"
          min={1}
          max={10}
          step={1}
          value={step}
          onChange={this.handlerRange}
        />
        <p>step: {step}</p>
      </section>
    );
  }
}

export default CounterPage;
