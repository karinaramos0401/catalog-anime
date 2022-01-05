import React from 'react' // quando é jsx não precisa importar o react
import Button from '../../ui/Button/Button'
import '../../styles/_config.scss'

import './Login.scss'

const Login = () => (
  <div className="container">
    <div className="field">
      <Button className="button" name="login"/>
    </div>
  </div>

)

export default Login
