import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react';
import CadastrarPage from './pages/cadastrarTarefa';
import RootPage from './pages/tarefas';
import Login from './pages/login';
import CadastrarUsuario from './pages/cadastrarUsuario';
import Home from './pages/home';

function App() {
  const [tasks, setTasks] = useState([
      {titulo: "título 1", descricao: "descricao 1", categoria: "Estudo"},
      {titulo: "título 2", descricao: "descricao 2", categoria: "Saúde"}
  ])

  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/cadastrarUsuario' element={<CadastrarUsuario/>} />
            <Route path='/inicial' element={<RootPage tasks={tasks} remover={setTasks}/>} />
            <Route path='/cadastrar' element={<CadastrarPage adicionar={setTasks}/>} />                
        </Routes>
    </Router>
  )
}

export default App;
