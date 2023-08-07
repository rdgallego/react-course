import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../../src/auth/context"
import { PrivateRoute } from "../../../src/heroes/routes/PrivateRoute"
import { render, screen } from "@testing-library/react"

/* eslint-disable no-undef */
describe('pruebas en PrivateRoute', () => { 
    test('should show children while logged', () => {
        Storage.prototype.setItem = jest.fn();
        const contextValue = {
            logged: true,
            user: {
                id: 'ABC',
                name: 'Roberto'
            }
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>

            </AuthContext.Provider>
        )
        expect(screen.getByText('Ruta privada')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
     })
 })