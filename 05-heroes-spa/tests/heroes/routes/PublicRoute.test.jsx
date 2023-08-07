import { render, screen } from "@testing-library/react"
import { PublicRoute } from "../../../src/heroes/routes/PublicRoute"
import { AuthContext } from "../../../src/auth/context"
import { MemoryRouter, Route, Routes } from "react-router-dom"

/* eslint-disable no-undef */
describe('pruebas en PublicRoute', () => { 
    test('should show children if not logged', () => { 
        const contextValue = {
            logged: false
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )
        expect(screen.getByText('Ruta publica')).toBeTruthy();
     })

     test('should show navigate if logged', () => { 
        const contextValue = {
            logged: true,
            user: {
                id: 'ABC',
                name: 'Roberto'
            }
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={<PublicRoute>
                                                        <h1>Ruta Publica</h1>
                                                    </PublicRoute>}/>
                        <Route path='marvel' element={<h1>Pagina marvel</h1>}/>
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(screen.getByText('Pagina marvel')).toBeTruthy();
      })
 })