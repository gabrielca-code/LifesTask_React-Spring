import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div class="container d-flex justify-content-center">
      <Link class="btn btn-primary m-2" to="/login">Login</Link>
      <Link class="btn btn-primary m-2" to="/cadastrarUsuario">Cadastrar-se</Link>
    </div>
  )
}

export default Home;