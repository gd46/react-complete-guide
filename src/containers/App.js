import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './App.css';

import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import Validation from '../components/Validation/Validation';
import Char from '../components/Char/Char';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: 23},
      { id: '2', name: 'Bill', age: 45},
      { id: '3', name: 'Joe', age: 34}
    ],
    showPersons: false,
    userInput: ''
  }

  nameChangedHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === personId;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]; // Make a copy to not modify existing state
    persons.splice(personIndex, 1);
    this.setState({persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  inputChangeHandler = (userInput) => {
    this.setState({
      userInput: userInput.target.value
    });
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({
      userInput: updatedText
    });
  }

  render() {
    let persons = null;

    const charList = this.state.userInput.split('').map((char, index) => {
      return <Char 
        character={char}
        key={index}
        clicked={() => this.deleteCharHandler(index)} />
    });

    if (this.state.showPersons) {
      persons = <Persons 
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangedHandler}/>
    }

    return (
        <div className="App">
            <Cockpit 
              showPersons={this.state.showPersons}
              persons={this.state.persons}
              clicked={this.togglePersonsHandler}/>
            {persons}
            <section className="lessonTwo">
              <input 
                onChange={this.inputChangeHandler}
                value={this.state.userInput}
              />
              <p>{this.state.userInput}</p>
              <Validation inputLength={this.state.userInput.length} />
              {charList}
            </section>
          </div>
    );
  }
}

export default App;
