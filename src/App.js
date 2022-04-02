
import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    console.log('rr')

    console.log(storedTodos)
    if(storedTodos) setTodos(storedTodos)
  }, [])
  
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]);

  function toggleTodo(id) {
    console.log('tpod')
    const newTodos = [...todos]
    const todo = newTodos.find(todo=> todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }
  function handelAddtodo(e) {
    const name = todoNameRef.current.value
    if(name === '') return
    setTodos(prevTodo =>{
        return [...prevTodo, {id:uuidv4(), name:name, complete:false}]
    })
    todoNameRef.current.value = null;
  }
  function handleClearTodos(e)
  {
    const newTodos = todos.filter(todo=> !todo.complete)
    console.log(newTodos)

    setTodos(newTodos)
  }

  return  (
    <>
        <TodoList todos={todos} toggleTodo={toggleTodo}/>
        <input ref={todoNameRef} type="text"/>
        <button onClick={handelAddtodo}>Add Todo</button>
        <button onClick={handleClearTodos}>Clear </button>
        <div> {todos.filter(todo=> !todo.complete).length} left todo</div>
    </>
  );
}

export default App;
