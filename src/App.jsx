import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import CadastrarPage from './pages/cadastrarTarefa';
import RootPage from './pages/tarefas';
import Login from './pages/login';
import CadastrarUsuario from './pages/cadastrarUsuario';
import Home from './pages/home';

function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/cadastrarUsuario' element={<CadastrarUsuario/>} />
            <Route path='/inicial' element={<RootPage/>} />
            <Route path='/cadastrar' element={<CadastrarPage/>} />                
        </Routes>
    </Router>
  )
}

export default App;
