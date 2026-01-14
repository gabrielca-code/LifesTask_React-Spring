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
    limparCampos()
  }

  const limparCampos = () => {
    setInputTitulo('')
    setInputDescricao('')
  }

  return (
    <>
      <div>
        <div>
          <label>Título: </label>
          <input type='text' placeholder='Título da tarefa' onChange={event => setInputTitulo(event.target.value)} value={inputTitulo}/>
        </div>
        <br/>
        <div>
          <label>Descrição: </label>
          <input type='text' placeholder='Descricao da tarefa' onChange={event => setInputDescricao(event.target.value)} value={inputDescricao}/>
        </div>
        <br/>
        <button onClick={() => handleBotaoAdicionar()}>Adicionar</button>
        <button onClick={() => limparCampos()}>Limpar</button>
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
