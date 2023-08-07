import { registerUserWithEmailPassword, signInWithGoogle, logInWithEmailAndPassword, logoutFirebase } from "../../firebase/providers"
import { clearNotesLogout } from "../journal/journalSlice"
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = () => {
    return async(dispatch) => {
        dispatch(checkingCredentials())
    }
}

export const startGoogleSignIn = () => {
    return async(dispatch) => {
        dispatch(checkingCredentials())

        const result = await signInWithGoogle();

        if(!result.ok) return dispatch(logout(result.errorMessage));
        if(result.ok) return dispatch(login(result))
    }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
    return async (dispatch) =>{
        dispatch(checkingCredentials());

        const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({email, password, displayName});
        if(!ok) return dispatch(logout({errorMessage}));
        if(ok) return dispatch(login({uid, displayName, email, photoURL}))

    }
}

export const startLoginWithEmailPassword = ({email, password}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const {ok, errorMessage, uid, displayName, photoURL} = await logInWithEmailAndPassword({email, password});
        if(!ok) return dispatch(logout({errorMessage}));
        if(ok) return dispatch(login({uid, displayName, photoURL, email}))
    }
}

export const startLogout = () => {
    return async(dispatch) => {
        dispatch(clearNotesLogout());
        await logoutFirebase();

        dispatch(logout());
    }
}