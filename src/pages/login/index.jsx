import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <div>
        <div>
            <label htmlFor="email">Email: </label>
            <input type='email' name='email' placeholder='Informe seu e-mail' />
        </div>
        <div>
            <label htmlFor="senha">Senha: </label>
            <input type='password' name='senha' placeholder='Informe sua senha' />
        </div>
        <Link to="/inicial">Entrar</Link>
      </div>
    </div>
  )
}

export default Login;