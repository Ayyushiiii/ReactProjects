import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id:1 , text:"Hello World"}]
}


export const TodoSlice = createSlice({
    // you need to give name to a slice
    name :"todo",
    initialState,
    reducers:{
        // need to give reference of the function 
        addTodo : (state , action)=>{
           const todo ={
             id: nanoid() ,
             text:action.payload
        }
        state.todos.push(todo)
        },
        removeTodo : (state , action)=>{
            state.todos = state.todos.filter((todo) =>
                todo.id !== action.payload
            )
        },
        updateTodo : (state , action )=>{
            // console.log(action.payload)
            state.todos.map((todo) =>{
                if(todo.id === action.payload.id){
                    todo.id = action.payload.id;
                    todo.text = action.payload.text;
                }
                
            }
           
        )
        
        }
        
    },
})


export const {addTodo , removeTodo , updateTodo} = TodoSlice.actions

export default TodoSlice.reducer