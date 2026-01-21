import { useState } from 'react'
import { Link } from 'react-router-dom'

function CadastrarPage({adicionar}) {
  const categorias = ["Estudo", "Finanças", "Rotina", "Saúde"]

  const [inputTitulo, setInputTitulo] = useState('')
  const [inputDescricao, setInputDescricao] = useState('')
  const [inputCategoria, setInputCategoria] = useState(categorias[0])

  const handleBotaoAdicionar = () => {
    let inputTituloLimpo = inputTitulo.trim()
    let inputDescricaoLimpo = inputDescricao.trim()

    if(inputTituloLimpo !== '' && inputCategoria !== '') {
      adicionar(prevTasks => [...prevTasks, {titulo: inputTituloLimpo, descricao: inputDescricaoLimpo, categoria: inputCategoria}])
      limparCampos()
    } else {
      alert("O campo título não pode estar vazio!")
    }
  }

  const limparCampos = () => {
    setInputTitulo('')
    setInputDescricao('')
  }

  return (
    <div class="container d-flex justify-content-center pt-5">
      <div class="column">
        <div class="d-flex justify-content-between p-1">
          <label class="m-1">Título: </label>
          <input type='text' placeholder='Título da tarefa' onChange={event => setInputTitulo(event.target.value)} value={inputTitulo} name='titulo'/>
        </div>
        <div class="d-flex justify-content-between p-1">
          <label class="m-1">Descrição: </label>
          <input type='text' placeholder='Descricao da tarefa' onChange={event => setInputDescricao(event.target.value)} value={inputDescricao} name='descricao'/>
        </div>
        <div class="d-flex justify-content-between p-1">
          <label class="m-1">Categoria: </label>
          <select name="categoria" id="categoria" onChange={event => setInputCategoria(event.target.value)}>
            {categorias?.map(categoria => (
              <option value={categoria}>{categoria}</option>
            ))}
          </select>
        </div>
        <div class="d-flex justify-content-between p-1">
          <button class="btn btn-primary m-2" onClick={() => handleBotaoAdicionar()}>Adicionar</button>
          <button class="btn btn-danger m-2" onClick={() => limparCampos()}>Limpar</button>
          <Link class="btn btn-danger m-2" to="/inicial">Voltar</Link>
        </div>
      </div>
    </div>
  )
}

export default CadastrarPage