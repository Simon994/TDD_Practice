import React from 'react'

import './Button.css'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.animal ? props.animal : 'Neither!'}
    </button>
  )
}

export default Button