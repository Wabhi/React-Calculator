import React, { Component } from "react";
import "./App.css";
import Button from "./Components/Buttons/Button";
import  Input  from "./Components/Inputs/Input";
import Clear from "./Components/Clear/Clear";
import *as  math from "mathjs";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
    //console.log('state change')
  };
  handleEqual = () => {
    this.setState({input:math.evaluate(this.state.input)})
    //console.log('equal')

  }
  render() {
    return (
      <div className="container">
        <h1 className="react">REACT CALCULATOR</h1>
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>X</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={()=>this.handleEqual()}>=</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <Clear handleClear={() => this.setState({ input: "" })}>
              CLEAR
            </Clear>
          </div>
        </div>
        </div>
        </div>
    );
  }
}

export default App;