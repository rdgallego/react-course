import { useEffect } from "react"
import { useForm } from "../hooks/useForm";

export const SimpleFormWithCustomHook = () => {

    const {formState, onInputChange, username, email, password, onResetForm} = useForm({
        username: '',
        email: '',
        password: ''
    })

/*     const {username, email, password} = formState; */

    useEffect(() => {
    }, [])
    useEffect(() => {
    }, [formState])

    useEffect(() => {
    }, [email])


  return (
    <>
        <h1>Formulario Con custom hook</h1>
        <hr />
        <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={onInputChange}/>
        <input type="email" className="form-control mt-2" placeholder="Email" name="email" value={email} onChange={onInputChange}/>
        <input type="password" className="form-control mt-2" placeholder="Constraseña" name="password" value={password} onChange={onInputChange}/>
        <button className="btn btn-primary" onClick={onResetForm}>Borrar</button>
    </>
  )
}
