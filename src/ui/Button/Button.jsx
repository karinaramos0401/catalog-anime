import React from 'react'

import './Button.scss'

const Button = ({children, variant}) => {
  const classes =  variant === 'dark' ? "button button--dark " : "button"
  return (
    <div>
    {/* <h1 className='welcome__login'>Welcome to AnimeFlix</h1> */}
    <button className={classes}>
    {children}
  </button>
    </div>
)

 }
 

export default Button
