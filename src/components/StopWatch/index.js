import React, { Component } from "react";

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.intervalId = null;
    console.log("constructor");
  }
  tick = () => {this.setState({ count: this.state.count + 1 });}
  start = () => {
    // this.stop();
    if (this.intervalId === null) {
      this.intervalId = setInterval(this.tick, 1000);
    }
  };
  stop = () => {
    clearInterval(this.intervalId);
    this.intervalId = null;
  };
  reset = () => {
    this.stop();
    this.setState({ count: 0 });
  };
  componentDidMount() {
    //this.start()
    console.log("componentDidMount");
  }
  // componentDidUpdate(){
  //   console.log('componentDidUpdate')
  // }
  componentWillUnmount() {
    console.log("componentWillUnmount");
    this.reset()
  }

  render() {
    const { count } = this.state;
    console.log("render");
    return (
      <article>
        <h2>{count}</h2>
        <button onClick={this.start}>start</button>
        <button onClick={this.stop}>stop</button>
        <button onClick={this.reset}>reset</button>
      </article>
    );
  }
}

export default StopWatch;
