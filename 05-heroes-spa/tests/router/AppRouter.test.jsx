import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth/context"
import { MemoryRouter } from "react-router-dom"
import { AppRouter } from "../../src/router/AppRouter"

/* eslint-disable no-undef */
describe('pruebas AppRouter', () => { 
    test('should show login if not loggedin', () => { 

        const contextvalue={logged: false}
        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextvalue}>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>

        )

        expect(screen.getAllByText('Login').length).toBe(2);
     })

     test('should show marvel component if logged in', () => { 
        const contextvalue={
            logged: true,
            user:{
                id: 'abc',
                name: 'Roberto'
            }}
        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={contextvalue}>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>

        )
        expect(screen.getByText('Roberto')).toBeTruthy();
        expect(screen.getByText('Logout')).toBeTruthy();
        expect(screen.getByText('Marvel Comics')).toBeTruthy();
      })
 })