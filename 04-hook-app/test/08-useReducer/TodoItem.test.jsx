import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

/* eslint-disable no-undef */
describe('Pruebas en onToggleTodo', () => { 
    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    }

    const onDeleteTodo = jest.fn();
    const onToggleTodo = jest.fn();
    beforeEach(() => jest.clearAllMocks());

    test('should show component', () => {
        render( <TodoItem todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo}/> );

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect (spanElement.className).toContain('align-self-center');
        expect (spanElement.className).not.toContain('text-decoration-line-through');
     });

     test('should show component completed', () => {

        todo.done = true;

        render( <TodoItem todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo}/> );

        const spanElement = screen.getByLabelText('span');
        expect (spanElement.className).toContain('text-decoration-line-through');
     });

     test('should call toggletodo when click', () => {
        render( <TodoItem todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo}/> );
        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);

        expect(onToggleTodo).toHaveBeenCalledWith(todo.id);
      });

      test('should call deletetodo when click', () => {
        render( <TodoItem todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo}/> );
        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);

        expect(onDeleteTodo).toHaveBeenCalledWith(todo.id);
      })
 })