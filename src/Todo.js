import React from 'react'

export default function Todo({ todo, toggleTodo}) {
    function handelTodoClick()
    {
        toggleTodo(todo.id)
    }
  return (
    <div>
        <label>
            <input type="checkbox" defaultChecked={todo.complete} onChange={handelTodoClick}/>
            {todo.name}
        </label>
    </div>
  )
}