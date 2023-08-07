import { Alert, Button, Grid, Link, TextField } from "@mui/material"
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";
const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe de tener un @'],
  password: [(value) => value.length >= 6, 'La contraseña debe de tener mas de 6 letras'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
}
export const RegisterPage = () => {

  const {status, errorMessage }= useSelector(state => state.auth)
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status])


  const {onInputChange, email, password, displayName, emailValid, passwordValid, displayNameValid, isFormValid, formState} = useForm(formData, formValidations)

  const [formSubmitted, setFormSubmitted] = useState(false)

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if(!isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword(formState))
  }

  return (
    <AuthLayout title="Register">
    <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
        <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
          <Grid item xs={12}>
            <TextField
            label="Nombre"
            type="text"
            placeholder="Nombre"
            fullWidth
            name="displayName"
            value={displayName}
            onChange={onInputChange}
            error={!!displayNameValid && formSubmitted}
            helperText={displayNameValid}></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
            label="Correo"
            type="email"
            placeholder="correo@google.com"
            fullWidth
            name="email"
            value={email}
            onChange={onInputChange}
            error={!!emailValid && formSubmitted}
            helperText={emailValid}></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
            label="Contraseña"
            type="password"
            placeholder="Contraseña"
            fullWidth
            name="password"
            value={password}
            onChange={onInputChange}
            error={!!passwordValid && formSubmitted}
            helperText={passwordValid}></TextField>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{mb: 2}}>
          <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
            <Alert severity="error">{errorMessage}</Alert>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button variant="contained" fullWidth type="submit" disabled={isCheckingAuthentication}>
              Register
            </Button>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ya tengo cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
  </AuthLayout>
  )
}
