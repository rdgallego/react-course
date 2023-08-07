import { useState } from 'react'
import { useGetTodosQuery, useGetTodoByIdQuery } from './api/todoApi'

export const TodoApp = () => {
    const [todoId, setTodoId] = useState(1);
    const {data: todo = '', isLoading} = useGetTodoByIdQuery(todoId)

    const nextTodo = () => {
        setTodoId(todoId + 1)
    }

    const previousTodo = () => {
        setTodoId(todoId - 1)
    }
  return (
    <>
        <h1>Todo App - RTK Query</h1>
        <hr />
        <h4>isLoading: {isLoading ? 'true' : 'false'} </h4>
        <pre>{JSON.stringify(todo)}</pre>
        <button onClick={() =>nextTodo()}>
            Next
        </button>
        <button onClick={() => previousTodo()}>
            Previous
        </button>
    </>
  )
}
