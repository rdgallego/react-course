/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react"
import { HomePage } from "../../src/09-useContext/HomePage"
import { UserContext } from "../../src/09-useContext/context/UserContext"

describe('prueba en homepage', () => { 
    const user = {
        id: 1,
        name: 'Roberto'
    }
    test('should show component without user', () => { 
        render(
        <UserContext.Provider value={{user: null}}>
            <HomePage/>
        </UserContext.Provider>
        )
        const preTag = screen.getByLabelText('pre');

        expect(preTag.innerHTML).toBe("null");


     })

     test('should show component with user', () => { 
        render(
        <UserContext.Provider value={{user: user}}>
            <HomePage/>
        </UserContext.Provider>
        )
        const preTag = screen.getByLabelText('pre');

        expect(preTag.innerHTML).not.toBe("null");
        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(user.id.toString());
     })
 })