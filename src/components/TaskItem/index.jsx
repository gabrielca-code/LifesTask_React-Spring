import React from 'react'

const TaskItem = ({titulo, descricao, categoria}) => {
  return (
    <div>
      <h3>{titulo}</h3>
      <h4>{categoria}</h4>
      <p>{descricao}</p>
    </div>
  )
}

export default TaskItem