//import { useState } from 'react'
import './App.css'
import TaskItem from './components/TaskItem'

function App() {

  return (
    <>
      <TaskItem titulo="task 1" descricao="descricao 1"/>
      <TaskItem titulo="task 2" descricao="descricao 2"/>
      <TaskItem titulo="task 3" descricao="descricao 3"/>
    </>
  )
}

export default App
