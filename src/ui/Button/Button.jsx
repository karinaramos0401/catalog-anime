import React from 'react'

import './Button.scss'

const Button = ({children, variant}) => {
  const classes =  variant === 'dark' ? "button button--dark " : "button"
  return (
    <div>
    <button className={classes}>
    {children}
  </button>
    </div>
)

 }
 

export default Button
