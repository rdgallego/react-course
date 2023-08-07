import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

/* eslint-disable no-undef */
describe('Pruebas en authReducer', () => { 
    const initialState = {
        logged: false
    }
    test('should return default state', () => { 
        const newState = authReducer(initialState, {});

        expect(newState).toEqual(initialState);
     })

     test('should call login', () => { 
        const user = {
            id: 'ABC',
            name: 'Roberto'
        }
        const action = {
            type: types.login,
            payload: user
        };
        const newState = authReducer(initialState, action)

        expect(newState.logged).toBeTruthy();
        expect(newState.user).toBe(user);
      })
      test('should call logout', () => { 
        const user = {
            id: 'ABC',
            name: 'Roberto'
        }
        const initialState = {
            logged: true,
            user: user
        }
        const action = {
            type: types.logout,
            payload: user
        };
        const newState = authReducer(initialState, action);

        expect(newState.logged).toBeFalsy();
        expect(newState.user).toBeFalsy();
      })
 })