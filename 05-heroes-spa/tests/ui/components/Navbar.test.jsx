/* eslint-disable no-undef */
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth/context";
import { Navbar } from "../../../src/ui";
import { fireEvent, render, screen } from "@testing-library/react";

const mockedUseNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}))

describe('Pruebas en Navbar', () => { 
    test('should show user name', () => { 
        const contextvalue={
            logged: true,
            user: {
                name: 'Roberto'
            }
        }
        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextvalue}>
                    <Navbar/>
                </AuthContext.Provider>
            </MemoryRouter>

        )

        expect(screen.getByText('Roberto')).toBeTruthy();
     })
    test('should call logout nad anvigate when click in button', () => { 
        const logout = jest.fn()
        const contextvalue={
                logged: true,
                user: {
                    name: 'Roberto'
                },
                logout
        }
        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextvalue}>
                    <Navbar/>
                </AuthContext.Provider>
            </MemoryRouter>
        )
        const logoutButton = screen.getByRole('button', {name: 'Logout'})
        fireEvent.click(logoutButton);
        expect(logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith('/login',{
            replace: true
        });
    })
 })