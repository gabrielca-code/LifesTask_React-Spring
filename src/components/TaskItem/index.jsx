import React from 'react'

const TaskItem = ({titulo, descricao}) => {
  return (
    <div>
      <h4>{titulo}</h4>
      <p>{descricao}</p>
    </div>
  )
}

export default TaskItem