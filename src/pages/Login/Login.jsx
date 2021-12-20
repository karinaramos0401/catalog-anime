import React from 'react'
import Button from '../../ui/Button/Button'
import Logo from '../../images/pc-eyes.png'


import './Login.scss'

const Login = ({onClick}) => (
  <div className='container'>
    <div className='field'>
      <Button className="button" onClick={onClick}/>
    </div>
  </div>

)

export default Login
