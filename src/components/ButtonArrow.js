import React from 'react';

const ButtonArrow = (props) => {

  const handleChange = () => {
    let increment = props.orientation === 'left' ? -1 : 1;
    props.onIndexChange(increment);
  }

  return (
    <button className = {`btn-floating btn-large waves-effect waves-light purple darken-2 button-arrow ${props.orientation === 'left' ? 'left-arrow' : 'right-arrow'}`} onClick = {handleChange}>
      <i className = "material-icons">{props.orientation === 'left' ? 'navigate_before' : 'navigate_next'}</i>
    </button>
  )
}

export default ButtonArrow;