import React from 'react'

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
        <button>Entrar</button>
      </div>
    </div>
  )
}

export default Login;