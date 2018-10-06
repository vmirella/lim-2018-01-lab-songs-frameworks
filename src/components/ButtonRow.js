import React from 'react';

const ButtonRow = (props) => {
  return <button> {props.orientation === 'left' ? '<' : '>'} </button> 
}

export default ButtonRow;