import React from 'react'
import { Link } from 'react-router-dom';

const CadastrarUsuario = () => {
  return (
    <div>
          <div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type='email' name='email' placeholder='Informe o e-mail' />
            </div>
            <div>
                <label htmlFor="senha">Senha: </label>
                <input type='password' name='senha' placeholder='Informe a senha' />
            </div>
            <div>
                <label htmlFor="confirmarSenha">Senha: </label>
                <input type='password' name='confirmarSenha' placeholder='Redigite a sua senha' />
            </div>
            <Link to="/">Cadastrar</Link>
            <Link to="/">Voltar</Link>
          </div>
        </div>
  )
}

export default CadastrarUsuario;