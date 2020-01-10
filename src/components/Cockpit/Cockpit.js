import React from 'react';

const cockpit = (props) => {

  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }


return(
  <div>
    <h1> Im a React Demo App</h1>
    <button onClick= { props.clicked} style={style}>Toggle Persons</button>
  </div>
)
}

export default cockpit;