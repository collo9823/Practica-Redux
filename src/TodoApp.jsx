import React, { useState } from 'react'
import { useGetTodoByIdQuery, useGetTodosQuery } from './store/apis'

export const TodoApp = () => {

    const [todoId, setTodoId] = useState(1)
    // const {data: todos = [], isLoading} = useGetTodosQuery();
    // console.log(todos)
    const {data: todo, isLoading} = useGetTodoByIdQuery(todoId);
    console.log(todoId)

    const prevTodo = ()=>{
        if(todoId <= 1) return;
        setTodoId(todoId - 1)
    }
    // console.log(todo)
  return (
    <>
        <h1>TodoApp RTK Query</h1>
        <hr />
        <h4>isLoading: {isLoading ? 'true' : 'false'}</h4>

        <pre>{JSON.stringify(todo)}</pre>
        
        <button onClick={()=> prevTodo()}>Previous</button>
        <button onClick={()=>setTodoId(todoId+1)}>Next</button>
        
        
        
        {/* <ul>
            {todos.map((todo)=>(
                <li key={todo.id}>
                    <strong>{todo.completed ? 'DONE' : 'PENDING'} </strong>
                    {todo.title}
                </li>
            ))}
        </ul> */}

    </>
  )
}
