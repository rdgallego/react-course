/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react"
import { LoginPage } from "../../src/09-useContext/LoginPage"
import { UserContext } from "../../src/09-useContext/context/userContext";



describe('Prueban en loginpage', () => { 
    beforeEach(() => jest.clearAllMocks());
    test('should show component without user', () => { 
        render(
        <UserContext.Provider value={{user: null}}>
            <LoginPage/>
        </UserContext.Provider>);

        const preElement = screen.getByLabelText('pre');
        const buttonElement = screen.getByRole('button');

        expect(preElement.innerHTML).toBe("null");
        expect(buttonElement).toBeTruthy();
        expect(buttonElement.className).toBe('btn btn-primary');
        expect(buttonElement.innerHTML).toBe('Set user');
     })

     test('should call setUser when button is clicked', () => { 
        const setUser = jest.fn()

        render(
        <UserContext.Provider value={{user: null, setUser: setUser}}>
            <LoginPage/>
        </UserContext.Provider>);
        const buttonElement = screen.getByRole('button');


        fireEvent.click(buttonElement);
        expect(setUser).toHaveBeenCalledWith({
            id: 1,
            name: 'juan',
            email: 'juan@gmail.com'
          })

      })
 })