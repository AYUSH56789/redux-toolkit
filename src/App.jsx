import React from 'react'
import { useSelector } from 'react-redux'
import InputTodo from './InputTodo'
import Counter from './Counter'
export default function App() {
  const todos=useSelector(state=>state.todoStore.todos)
  console.log("state",todos)
  return (
    <div>
      <Counter/>
      <h1 className='text-center m-4'>AYUSH- TODO APPLICATION</h1>
      <InputTodo/>
      <h1 className='text-center m-4'> -TODOS- </h1>
      {todos.map((todo)=>(
        <li key={todo.id}>{todo.task}</li>
      ))}
    </div>
  )
}
