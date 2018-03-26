import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React JS</h2>
        </div>
        <Person name="Max" age="29"/>
        <Person name="hamza" age="22"/>
        <Person name="faizan" age="21">Some additional information</Person>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  } 
}
//display additional information on the component by using props.children
//component rendered in line 13
//components reusability just add this <Person />
export default App;