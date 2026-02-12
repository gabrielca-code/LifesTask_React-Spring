import { useEffect } from 'react'
import TaskItem from '../../components/TaskItem'
import { Link } from 'react-router-dom'
import { useTarefaData } from '../../hooks/useTarefaData'

function RootPage({tasks, remover}) {

  const handleBotaoRemover = (itemRemovido) => {
    remover(tasks.filter(remover => remover.titulo !== itemRemovido.titulo))
  }

  async function getData() {
    const response = await fetch("http://localhost:8080/tarefa", {
      method: "GET" })
    const result = await response.json();
    console.log(result.content)
  }

  const { data } = useTarefaData();

  useEffect(() => {
    getData()
  }, [])

  return (
    <div class="container d-flex justify-content-center pt-5">
      <div class="column">
        <div>
            <Link className="btn btn-success m-2" to="/cadastrar">Nova tarefa</Link>
        </div>

        <div>
          {tasks?.map(task => (
            <div>
              <TaskItem titulo={task.titulo} descricao={task.descricao} categoria={task.categoria}/>
              <button class="btn btn-danger" onClick={() => handleBotaoRemover(task)}>Remover</button>
            </div>
          ))}

          {data?.map(task => (
            <div>
              <TaskItem titulo={task.titulo} descricao={task.descricao} categoria="a"/>
              <button class="btn btn-danger" onClick={() => handleBotaoRemover(task)}>Remover</button>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default RootPage