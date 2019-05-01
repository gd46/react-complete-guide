import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 23},
      { name: 'Bill', age: 45},
      { name: 'Joe', age: 34}
    ]
  }

  switchNameHandler = (name) => {
    this.setState({
      persons: [
        { name: 'Max', age: 23},
        { name: name, age: 45},
        { name: 'Joe', age: 34}
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 23},
        { name: event.target.value, age: 45},
        { name: 'Joe', age: 34}
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>React Complete Guide</h1>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Maximillian')}
          >Switch Name</button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        ></Person>

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Joel')}
          changed={this.nameChangedHandler}
        ></Person>

        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        ></Person>
      </div>
    );
  }
}

export default App;
