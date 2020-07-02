import React, { Component } from "react";
import "./CountClass.css";
export default class CountClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 0,
    };
  }
  addNumber = () => {
    this.setState((state) => ({
      num: state.num + 1,
    }));
  };
  minNumber = () => {
    if (this.state.num >= 1) {
      this.setState((state) => ({
        num: state.num - 1,
      }));
    } else {
      alert("Angka tidak boleh negatif!");
    }
  };
  resetNumber = () => {
    this.setState((state) => ({ num: 0 }));
  };

  render() {
    return (
      <div className="countC">
        <h1>
          Count: <span>{this.state.num}</span>
        </h1>
        <button onClick={this.addNumber}>+</button>
        <button onClick={this.minNumber}>-</button>
        <button onClick={this.resetNumber}>RESET</button>
        {/* <button onClick={() => setnumber(number - 1)}>-</button>
        <button onClick={() => setnumber(0)}>RESET</button> */}
      </div>
    );
  }
}
