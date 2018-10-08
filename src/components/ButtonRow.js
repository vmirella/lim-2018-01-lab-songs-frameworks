import React from 'react';

const ButtonRow = (props) => {

  const handleChange = () => {
    let increment = props.orientation === 'left' ? -1 : 1;
    props.onIndexChange(increment);
  }

  return <button onClick = {handleChange}> {props.orientation === 'left' ? '<' : '>'} </button> 
}

export default ButtonRow;