import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Person from './Person/Person'
class App extends Component {
  //state present in component, can only be used inside extending component's class
  state = {
    persons: [
      {name:'Hamza', age:22},
      {name:'Ali', age: 22},
      {name:'Mohsin', age:23}
    ]
  }
  switchNameHandler = (newname) => {
    this.setState({
        persons:[
          {name:newname, age:22},
          {name:'Hamza', age: 22},
          {name:'Mohsin', age:22}
      ]
    })
  }
  nameChangedHandler = (event) =>{
    this.setState({
      persons:[
        {name: 'faizan', age:22},
        {name:event.target.value, age: 22},
        {name:'Mohsin', age:22}
    ]
  })
  }
  render() {
    
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React JS</h2>
        </div>
        <button onClick={this.switchNameHandler.bind(this,'xyz')}>SwitchName</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}
        change={this.nameChangedHandler}
        />
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={() => this.switchNameHandler('abc')}
        />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Some additional info</Person>
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