import React from 'react'
import { Link } from 'react-router-dom';

const CadastrarUsuario = () => {
  return (
    <div class="container d-flex justify-content-center">
      <div class="column">
        <div class="d-flex justify-content-between p-1">
            <label class="m-1" htmlFor="email">Email: </label>
            <input type='email' name='email' placeholder='Informe o e-mail' />
        </div>
        <div class="d-flex justify-content-between p-1">
            <label class="m-1" htmlFor="senha">Senha: </label>
            <input type='password' name='senha' placeholder='Informe a senha' />
        </div>
        <div class="d-flex justify-content-between p-1">
            <label class="m-1" htmlFor="confirmarSenha">Senha: </label>
            <input type='password' name='confirmarSenha' placeholder='Redigite a sua senha' />
        </div>
        <div class="d-flex justify-content-center p-1">
          <Link class="btn btn-primary m-1" to="/">Cadastrar</Link>
          <Link class="btn btn-primary m-1" to="/">Voltar</Link>
        </div>
      </div>
    </div>
  )
}

export default CadastrarUsuario;