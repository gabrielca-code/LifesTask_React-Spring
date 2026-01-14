import { useState } from 'react'
import './App.css'
import TaskItem from './components/TaskItem'

function App() {
  const [tasks, setTasks] = useState([{
    titulo: "teste1",
    descricao: "descricao1"
  }, {
    titulo: "teste2",
    descricao: "descricao2"
  }])

  return (
    <>
      <div>
        <input type='text' placeholder='Título da tarefa'/>
        <br/>
        <input type='text' placeholder='Descricao da tarefa'/>
        <br/>
        <button>Adicionar</button>
      </div>

      <div>
        {tasks.map(task => (
          <TaskItem titulo={task.titulo} descricao={task.descricao}/>
        ))}
        
      </div>
    </>
  )
}

export default App
