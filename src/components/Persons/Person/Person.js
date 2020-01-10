import React from 'react';

const person = (props) => {
 
  return <div className="Person">
           <p onClick={props.click}>person name is {props.name} and has {props.age} years</p>
           <p>{props.children}</p>
           <input type="text" onChange={props.changed} value={props.name}/>
         </div>
};

export default person;
