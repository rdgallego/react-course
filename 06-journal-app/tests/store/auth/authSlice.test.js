/* eslint-disable no-undef */
import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice"
import { authenticatedState, demoUser, initialState } from "../../fixtures/authFixtures";

describe('Pruebas en authslice', () => {
    test('should devolver estado inicial y se llame auth', () => {
        expect(authSlice.name).toBe('auth');
        const state = authSlice.reducer(initialState, {});
        expect(state).toEqual(initialState);
    });

    test('should autenticar', () => { 
        const state = authSlice.reducer(initialState, login(demoUser));

        expect(state).toEqual({
            status: 'authenticated',
            uid: demoUser.uid,
            displayName: demoUser.displayName,
            photoURL: demoUser.photoURL,
            errorMessage: null,
            email: demoUser.email
        })
     })

     test('should realizar logout', () => { 
        const state = authSlice.reducer(authenticatedState, logout());
        expect(state).toEqual({
            status: 'not-authenticated',
            uid: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined,
            email: null
        })
      })

      test('should realizar logout y mostrar mensaje de error', () => { 
            const errorMessage = 'Creedenciales no son correctos';
            const state = authSlice.reducer(authenticatedState, logout({errorMessage}));
            expect(state).toEqual({
                status: 'not-authenticated',
                uid: null,
                displayName: null,
                photoURL: null,
                errorMessage: errorMessage,
                email: null
            })
       })

       test('should cambiar estado a checking', () => { 
            const state = authSlice.reducer(initialState, checkingCredentials());
            expect(state.status).toBe('checking')
        })
 })