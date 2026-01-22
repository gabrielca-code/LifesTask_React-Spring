import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  const [inputLogin, setInputLogin] = useState('')
  const [inputSenha, setInputSenha] = useState('')

  function logar() {
    if(inputLogin === '') {
      alert("Informe o login do do usuário")
    }
  }

  return (
    <div class="container d-flex justify-content-center">
      <div class="column">
        <div class="d-flex justify-content-between p-1">
            <label htmlFor="email" class="m-2">Email: </label>
            <input type='email' name='email' placeholder='Informe seu e-mail' value={inputLogin} onChange={event => setInputLogin(event.target.value)}/>
        </div>
        <div class="d-flex justify-content-between p-1">
            <label htmlFor="senha" class="m-2">Senha: </label>
            <input type='password' name='senha' placeholder='Informe sua senha' value={inputSenha} onChange={event => setInputSenha(event.target.value)}/>
        </div>
        <div class="d-flex justify-content-center">
          <Link class="btn btn-primary" to="/inicial">Entrar</Link>
          <Link class="btn btn-primary" onClick={() => logar()}>Entrar</Link>
        </div>
      </div>
    </div>
  )
}

export default Login;