import React, { Component } from "react";
import './Counter.css';
import './button.css'

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div className="counter-center">
        <button className="button" onClick={this.incrementCount}>Count {this.state.count} </button>
      </div>
    );
  }
}

export default Counter;
