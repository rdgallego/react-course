
import { TodoList } from "./TodoList"
import { NewTodo } from "./NewTodo"
import { useTodos } from "../hooks"

export const TodoApp = () => {

    const {todos,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo} = useTodos();


  return (
    <>
        <h1>TodoApp (10), <small>Pendientes: 2</small></h1>
        <hr />
        <div className="row">
            <div className="col-7 list-group">
                <TodoList todos={todos}  onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo}/>
            </div>
            <div className="col-5">
                <hr />
                <NewTodo handleNewTodo={handleNewTodo}/>
            </div>
        </div>

    </>

  )
}
