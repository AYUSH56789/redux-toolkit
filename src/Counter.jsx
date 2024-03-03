import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { decrement, increment } from './featues/counter/counterSlice';
export default function Counter() {
   const counter= useSelector(state=>state.counterStore.value);
   const dispatch=useDispatch();
  return (
    <div className="w-100" style={{margin:"20px" ,display:"flex",justifyContent:"center",alignItems:"cennter"}}>
      <button className='btn btn-primary p-4  w-50' onClick={()=>{dispatch(decrement())}}>-</button>
      <p className=' p-4 w-50 text-center' >{counter}</p>
      <button className='btn btn-primary p-4 w-50' onClick={()=>{dispatch(increment())}}>+</button>
    </div>
  )
}
