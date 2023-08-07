import { useForm } from "../hooks/useForm"

export const NewTodo = ({handleNewTodo}) => {
  const {description, onInputChange, onResetForm} = useForm({
    description: ''
  })

  const onFormSubmit = (event) => {
    event.preventDefault();
    if(description.length <= 1 ) return;
    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: description
    }

    handleNewTodo(newTodo);
  }

  return (
    <form onSubmit={onFormSubmit}>
        <input type="text" placeholder="Añadir todo" className="form-control" name="description" value={description} onChange={onInputChange}/>
        <button type="submit" className="btn btn-outline-primary mt-1">Agregar</button>
    </form>
  )
}
