import React, { Component } from 'react';

class WindowSize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width:window.innerWidth,
      height:window.innerHeight
    }
  }

  hendlerResize = () => {
    this.setState({
      width:window.innerWidth,
      height:window.innerHeight
    })
  }

  componentDidMount(){
    window.addEventListener('resize', this.hendlerResize);    
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.hendlerResize);  
  }
  
  render() {
    const {width, height} = this.state;
    return (
      <div>
        <p>width: {width}</p>
        <p>height: {height}</p>
      </div>
    );
  }
}

export default WindowSize;
