import { createSlice, nanoid} from "@reduxjs/toolkit";
const initialState={todos:[{id:"121",task:"coding",status:"done"}]}
export const todoSlice = createSlice({
    name:"todo0000",
    initialState,
    reducers:{
        addTask:(state,action)=>{
            console.log("action",action)
            const newTodo={
                id:nanoid(),
                task:action.payload,
                status:"done",
            }
            state.todos.push(newTodo);
        },
        removeTask:(state,action)=>{
            state.todos=state.todos.filter(todo=>todo.id!==action.payload.id)
        },
        updateStatus:(state,action)=>{
        //    pending 
        }
    }
});

export const{addTask,removeTask,updateStatus}=todoSlice.actions
export default todoSlice.reducer;
