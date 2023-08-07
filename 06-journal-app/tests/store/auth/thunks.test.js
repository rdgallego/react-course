/* eslint-disable no-undef */
import { logInWithEmailAndPassword, logoutFirebase, signInWithGoogle } from "../../../src/firebase/providers";
import { checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword, startLogout } from "../../../src/store/auth/thunks"
import { clearNotesLogout } from "../../../src/store/journal/journalSlice";
import { demoUser } from "../../fixtures/authFixtures";
jest.mock('../../../src/firebase/providers')

describe('pruebas en auth thunks', () => { 
    const dispatch = jest.fn();

    beforeEach(() => jest.clearAllMocks())

    test('should invocar el checking credentials', async() => { 

        await checkingAuthentication()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
     });

     test('should debe de llamar checking credentials y login', async() => { 
        const loginData = {ok: true, ...demoUser};
        await signInWithGoogle.mockResolvedValue(loginData);

        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));
      })

      test('should debe de llamar checking credentials y logout con error', async() => { 
        const loginData = {ok: false, errorMessage: 'Un error'};
        await signInWithGoogle.mockResolvedValue(loginData);

        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
      })

      test('should llamar checking credentials y login con exito', async() => { 
          const loginData = {ok: true, ...demoUser};
          const formData = {email: demoUser.email, password: '123456'};
        
          await logInWithEmailAndPassword.mockResolvedValue(loginData);

          await startLoginWithEmailPassword(formData)(dispatch);

          expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
          expect(dispatch).toHaveBeenCalledWith(login({
            uid: '123ABC',
            email: 'test@gmail.com',
            displayName: 'Demo User',
            photoURL: 'https://demo.jpg'
        }))

      })

      test('should debe de llamar logoutfirebase, clearnotes y logout', async() => { 
          await startLogout()(dispatch);
          expect(logoutFirebase).toHaveBeenCalled();
          expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
          expect(dispatch).toHaveBeenCalledWith(logout());
       })
 })