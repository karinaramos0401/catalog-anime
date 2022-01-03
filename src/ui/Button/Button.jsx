import React from 'react'

import './Button.scss'

const Button = ({children, variant}) => {
  const classes =  variant === 'dark' ? "button button--dark " : "button"
  return (
  <button className={classes}>
    {children}
  </button>
)

 }
 

export default Button
