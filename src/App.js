import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Incrementer extends Component {
  constructor(props){
    super(props);
    this.state = {nr: 0};
}

increment = () =>{
  console.log('increment');
  this.setState( (prevState,props) => ({
    nr: prevState.nr + 1
})); 
}

decrement = () => {
  console.log('decrement');
  this.setState( (prevState,props) => ({
    nr: prevState.nr -1
})); 
}

  render() {
    return (
      <div className="App">
      <h1>{this.state.nr}</h1>
       <button type="button" onClick={this.increment}>increment</button>
       <button type="button" onClick={this.decrement}>decrement</button>
      </div>
    );
  }
}

export default Incrementer;
