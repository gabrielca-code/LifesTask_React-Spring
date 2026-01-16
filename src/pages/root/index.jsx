import { useState } from 'react'
import TaskItem from '../../components/TaskItem'

function RootPage() {
  const [tasks, setTasks] = useState([
    {titulo: "título 1", descricao: "descricao 1", categoria: "Estudo"},
    {titulo: "título 2", descricao: "descricao 2", categoria: "Saúde"}
  ])

  const categorias = ["Estudo", "Finanças", "Rotina", "Saúde"]

  const [inputTitulo, setInputTitulo] = useState('')
  const [inputDescricao, setInputDescricao] = useState('')
  const [inputCategoria, setInputCategoria] = useState(categorias[0])

  const handleBotaoAdicionar = () => {
    let inputTituloLimpo = inputTitulo.trim()
    let inputDescricaoLimpo = inputDescricao.trim()

    if(inputTituloLimpo !== '' && inputCategoria !== '') {
      setTasks(prevTasks => [...prevTasks, {titulo: inputTituloLimpo, descricao: inputDescricaoLimpo, categoria: inputCategoria}])
      limparCampos()
    } else {
      alert("O campo título não pode estar vazio!")
    }
  }

  const limparCampos = () => {
    setInputTitulo('')
    setInputDescricao('')
  }

  const handleBotaoRemover = (itemRemovido) => {
    setTasks(tasks.filter(remover => remover.titulo !== itemRemovido))
  }

  return (
    <>
      <div>
        <div>
          <label>Título: </label>
          <input type='text' placeholder='Título da tarefa' onChange={event => setInputTitulo(event.target.value)} value={inputTitulo} name='titulo'/>
        </div>
        <div>
          <label>Descrição: </label>
          <input type='text' placeholder='Descricao da tarefa' onChange={event => setInputDescricao(event.target.value)} value={inputDescricao} name='descricao'/>
        </div>
        <div>
          <label>Categoria: </label>
          <select name="categoria" id="categoria" onChange={event => setInputCategoria(event.target.value)}>
            {categorias?.map(categoria => (
              <option value={categoria}>{categoria}</option>
            ))}
          </select>
        </div>
        <button onClick={() => handleBotaoAdicionar()}>Adicionar</button>
        <button onClick={() => limparCampos()}>Limpar</button>
      </div>

      <div>
        {tasks?.map(task => (
          <div>
            <TaskItem titulo={task.titulo} descricao={task.descricao} categoria={task.categoria}/>
            <button onClick={() => handleBotaoRemover(task.titulo)}>Remover</button>
          </div>
        ))}
        
      </div>
    </>
  )
}

export default RootPage