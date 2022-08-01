import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);
    }
    
    handleIncrease() {
        // 함수형 업데이트
        this.setState(state=>({
            counter: state.counter+1,
        }));
        console.log('increase');
        console.log(this);
    }

    handleDecrease() {
    this.setState({
        counter: this.state.counter - 1,
    })
    console.log('decrease');
}
  render() {
    return (
      <div>
            <h1>{ this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
      </div>
    );
  }
}

export default Counter;