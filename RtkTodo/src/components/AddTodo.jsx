import React,{useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../features/todo/TodoSlice';
import Todos from './Todos';


function AddTodo() {
    const [input , setInput] = useState("");
    const dispatch = useDispatch();
    const[editForm , setEditForm] = useState(false);
    const [updated , setUpdated] = useState({});

    const addTodoHandler = (e) =>{
        e.preventDefault();
        dispatch(addTodo(input));
        setInput("");
    }

    const handleEdit  = (todo) => {
      setEditForm(!editForm)
      setInput(todo.text);
      setUpdated(todo);
    }

    const updateTodohandler = (e) =>{
      e.preventDefault();
      let editObj = {
        id : updated.id,
        text : input
      }
      dispatch(updateTodo(editObj))
      setEditForm(false);
      setInput('')
    }

    useEffect(() =>{
    
    }, [updated]);


 return (

  <>
  <h1 className='font-black text-gray-400 font-serif text-xl'> To Do List (React Redux)</h1>
  {editForm?
     <form onSubmit={updateTodohandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        update Todo
      </button>
    </form>
    :
     <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
      
    </form>}
    <Todos 
      handleEdit = {handleEdit}/>
  
  </>

   
  )
}

export default AddTodo