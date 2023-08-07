/* eslint-disable no-undef */
import { todoReducer } from "../../src/08-useReducer/todoRecuder"

describe('pruebas en todoReducer', () => { 

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }]

    test('should return initial state', () => { 
        const newState = todoReducer(initialState, {});

        expect(newState).toBe(initialState);
     })

     test('should add todo', () => { 
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'New todo',
                done: false
            }
        };

        const newState = todoReducer(initialState, action);
        console.log(newState)
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
      });



      test('should add todo', () => { 
        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        };

        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(0);

      });

      test('should toogle todo', () => { 
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        };

        const newState = todoReducer(initialState, action);

        expect(newState[0].done).toBeTruthy();
       })
 })