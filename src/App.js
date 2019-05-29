import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Radium, { StyleRoot  } from 'radium';


import Person from './Person/Person';
import Validation from './Validation/Validation';
import Char from './Char/Char';

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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      marginBottom: '15px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;

    const charList = this.state.userInput.split('').map((char, index) => {
      return <Char 
        character={char}
        key={index}
        clicked={() => this.deleteCharHandler(index)} />
    });

    if (this.state.showPersons) {
      persons = (
          <div>
            {
              this.state.persons.map((person, index) => {
                return (
                  <Person 
                    click={() => this.deletePersonHandler(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.nameChangedHandler(event, person.id)}
                  />
                )
              })
            }
          </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'lightred',
        color: 'black'
      }
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
            <h1>React Complete Guide</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <section className="lessonOne">
            <button 
              style={style}
              onClick={this.togglePersonsHandler}
              // onClick={() => this.switchNameHandler('Maximillian')}
              >Switch Name</button>
            {persons}
            </section>
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
      </StyleRoot>
    );
  }
}

export default Radium(App);
