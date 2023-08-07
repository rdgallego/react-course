/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react"
import { MainApp } from "../../src/09-useContext/MainApp"
import { MemoryRouter } from "react-router-dom"

describe('pruebas en MainApp', () => { 
    test('should show home page', () => { 
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp/>
            </MemoryRouter>
        )

        expect(screen.getByText('LoginPage')).toBeTruthy();
     })
 })