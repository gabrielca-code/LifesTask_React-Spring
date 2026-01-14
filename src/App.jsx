import { useState } from 'react'
import './App.css'
import TaskItem from './components/TaskItem'

function App() {
  const [tasks, setTasks] = useState([
    {titulo: "título 1", descricao: "descricao 1"},
    {titulo: "título 2", descricao: "descricao 2"}
  ])

  const [inputTitulo, setInputTitulo] = useState('')
  const [inputDescricao, setInputDescricao] = useState('')

  const handleBotaoAdicionar = () => {
    setTasks(prevTasks => [...prevTasks, {titulo: inputTitulo, descricao: inputDescricao}])
  }

  return (
    <>
      <div>
        <input type='text' placeholder='Título da tarefa' onChange={event => setInputTitulo(event.target.value)}/>
        <br/>
        <input type='text' placeholder='Descricao da tarefa' onChange={event => setInputDescricao(event.target.value)}/>
        <br/>
        <button onClick={() => handleBotaoAdicionar()}>Adicionar</button>
      </div>

      <div>
        {tasks?.map(task => (
          <TaskItem titulo={task.titulo} descricao={task.descricao}/>
        ))}
        
      </div>
    </>
  )
}

export default App
