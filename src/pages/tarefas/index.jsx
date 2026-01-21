import TaskItem from '../../components/TaskItem'
import { Link } from 'react-router-dom'

function RootPage({tasks, remover}) {

  const handleBotaoRemover = (itemRemovido) => {
    remover(tasks.filter(remover => remover.titulo !== itemRemovido.titulo))
  }

  return (
    <div class="container d-flex justify-content-center pt-5">
      <div class="column">
        <div>
            <Link class="btn btn-success m-2" to="/cadastrar">Nova tarefa</Link>
        </div>

        <div>
          {tasks?.map(task => (
            <div>
              <TaskItem titulo={task.titulo} descricao={task.descricao} categoria={task.categoria}/>
              <button class="btn btn-danger" onClick={() => handleBotaoRemover(task)}>Remover</button>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default RootPage