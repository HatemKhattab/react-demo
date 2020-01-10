import React, { useState } from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person'

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

  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  let persons = null;
  if(showPersons){
    persons = (
      <div>
        {personsState.persons.map((person, index)=>{
          return(<Person
            key={index}
            name={person.name}
            age={person.age}
            click={()=> deletePersonHandler(index)}
            changed = {(event)=>nameChangeHandler(event, index)}
            />)
        })}
      </div>
    )
    style.backgroundColor = 'red';
  }

  return (
      <div className="App">
        <h1> Im a React Demo App</h1>
        <button onClick= {swichNameHandler} style={style}>Toggle Persons</button>
        {persons}
      </div>
  );
}

export default App;
