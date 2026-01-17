import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import CadastrarPage from './pages/cadastrar';
import RootPage from './pages/tarefas';
import Login from './pages/login';

function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<RootPage/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/inicial' element={<RootPage/>} />
            <Route path='/cadastrar' element={<CadastrarPage/>} />                
        </Routes>
    </Router>
  )
}

export default App;
