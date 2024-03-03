import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from './featues/todo/todoSclice'

export default function InputTodo() {
    const [task,setTask]=useState("");
    const handleOnChange=(event)=>{
      event.preventDefault()
      setTask(event.target.value)
    }
    const dispatch=useDispatch()
    const handleOnSubmit=()=>{
      console.log(dispatch(addTask(task)))
      setTask('')
    }
  return (
    <div className="form-group" style={{display:"flex",justifyContent:"center",alignContent:"cennter"}}>
        <input type="text"
          className="form-control" name="task" id="task" onChange={handleOnChange} value={task} aria-describedby="helpId" placeholder="Enter Task"/>
          <button type='submit' onClick={handleOnSubmit}>Add</button>
      </div>
  )
}
