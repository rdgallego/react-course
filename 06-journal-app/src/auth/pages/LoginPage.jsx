import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth/thunks";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";

const formData = {
  email: '',
  password: ''
}
export const LoginPage = () => {

  const {status, errorMessage} = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const {onInputChange, email, password} = useForm(formData)

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(startLoginWithEmailPassword({email, password}));
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  }
  return (
    <AuthLayout title="Login">
      <form data-testid="form" onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
          <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
            <Grid item xs={12}>
              <TextField label="Correo" type="email" placeholder="correo@google.com" name="email" value={email} onChange={onInputChange} fullWidth></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField inputProps={{'data-testid': 'Contraseña'}} label="Contraseña" type="password" placeholder="Contraseña" name="password" value={password} onChange={onInputChange} fullWidth></TextField>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{mb: 2}}>
          <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
            <Alert severity="error">{errorMessage}</Alert>
          </Grid>
            <Grid item xs={12} sm={6}>
              <Button type="submit" variant="contained" fullWidth disabled={isAuthenticating}>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button aria-label="google-btn" onClick={onGoogleSignIn} variant="contained" fullWidth disabled={isAuthenticating}>
                <Google  />
                <Typography sx={{ml: 1}}>Google</Typography>
              </Button>
            </Grid>

            <Grid container direction="row" justifyContent="end">
              <Link component={RouterLink} color="inherit" to="/auth/register">
                Crear una cuenta
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
}
