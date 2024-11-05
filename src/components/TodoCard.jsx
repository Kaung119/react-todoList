import React from 'react'

export default function TodoCard(props) {
  const { children, handleDeleteTodos, index, handleEditTodo } = props
  return (
      <li className='todoItem'>
        {children}
        <div className="actionsContainer">

          <button onClick={() => 
            handleEditTodo(index)
          }>Edit</button>
          <button onClick={() => 
            handleDeleteTodos(index)}>Delete</button>
        </div>
      </li>
  )
}
