/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react"
import { LoginPage } from "../../../src/auth/pages/LoginPage"
import { Provider, useDispatch } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { authSlice } from "../../../src/store/auth/authSlice"
import { MemoryRouter } from "react-router-dom"
import { notAuthenticatedState } from "../../fixtures/authFixtures"

const mockStartGoogleSignIn = jest.fn();
const mockStartLoginWithEmailPassword= jest.fn();

jest.mock('../../../src/store/auth/thunks', () => ({
    startGoogleSignIn: () => mockStartGoogleSignIn,
    startLoginWithEmailPassword: ({email, password}) => () => mockStartLoginWithEmailPassword({email, password})
}));

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => (fn) => fn()
}))

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
    preloadedState:{
        auth: notAuthenticatedState
    }
})

describe('Pruebas en LoginPage', () => { 

    beforeEach(() => jest.clearAllMocks())
    test('should mostrar el componente correctamente', () => { 
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        )

        expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1);
    })

    test('should boton de google llamar start google sign in', () => { 
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        const googleBtn = screen.getByLabelText('google-btn');
        fireEvent.click(googleBtn);

        expect(mockStartGoogleSignIn).toHaveBeenCalled();
     })

     test('should debe de llamar start login with email y password', () => { 
        
        const email = 'roberto@gmail.com';
        const password = '1234567';

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        const emailField = screen.getByRole('textbox', {name:'Correo'});
        const passwordField = screen.getByTestId('Contraseña');

        fireEvent.change(emailField, {target: {name: 'email', value: email}});
        fireEvent.change(passwordField, {target: {name: 'password', value: password}});

        const loginForm = screen.getByTestId('form');

        fireEvent.submit(loginForm);

        expect(mockStartLoginWithEmailPassword).toHaveBeenCalledWith({email, password});
      })
 })