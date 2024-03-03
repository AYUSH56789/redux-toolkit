// step-1
import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../featues/todo/todoSclice';
import counterReducer from '../featues/counter/counterSlice';
export const store = configureStore({
  reducer: {
    todoStore: todoReducer,
    counterStore:counterReducer
    } 
});
