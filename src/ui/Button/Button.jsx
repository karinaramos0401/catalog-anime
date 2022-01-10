import React from 'react'

import './Button.scss'

const Button = ({children, variant, onClick}) => {
  const classes =  variant === 'dark' ? "button button--dark " : "button"
  return (
    <div>
    <button className={classes} onClick={onClick}>
    {children}
  </button>
    </div>
)

 }
 

export default Button
