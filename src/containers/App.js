import React, { useState } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Ahmed', age: '18'},
      {name: 'Kareem', age: '24'},
    ],
    other: 'bla bla'
  });

  const [showPersons, setshowPersons] = useState(false)

  const swichNameHandler = () => {
    setshowPersons(!showPersons)
  }

  const deletePersonHandler= (personIndex) => {
    const persons = [...personsState.persons]
    persons.splice(personIndex, 1)
    setPersonsState({persons: persons})
  }

  const nameChangeHandler = (event, index)=>{
    const person = {...personsState.persons[index]}
    person.name = event.target.value
    const persons = [...personsState.persons]
    persons[index] = person
    setPersonsState({persons: persons})
  }

  

  let persons = null;
  if(showPersons){
    persons = (
      <div>
        <Persons
          persons = {personsState.persons}
          clicked = {deletePersonHandler}
          changed = {nameChangeHandler} 
        />
      </div>
    )
  }

  return (
      <div className="App">
        <Cockpit clicked={swichNameHandler}/>
        {persons}
      </div>
  );
}

export default App;
