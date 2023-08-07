import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoRecuder"

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleNewTodo = (event) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: event
        }
        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id
        }
        dispatch(action);
    }

    const handleToggleTodo = (id) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id
        }
        dispatch(action);
    }

    return{
        todos,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo
    }
}
