import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components"

/* eslint-disable no-undef */
describe('Pruebas en AddCategory', () => { 
    const inputValue = 'Saitama';

    test('should change value from textbox', () => { 
        render(<AddCategory onAddCategory={() => {}}/>)
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: {value: inputValue} });
        expect(input.value).toBe(inputValue);
     })

     test('should call onAddCategory if input has value', () => { 
        const onAddCategory = jest.fn();
        render(<AddCategory onAddCategory={onAddCategory}/>)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: {value: inputValue} });
        fireEvent.submit(form);
        expect(input.value).toBe('');
        expect(onAddCategory).toHaveBeenCalledWith(inputValue);
        expect(onAddCategory).toHaveBeenCalledTimes(1);
      })

      test('should not call onAddCategory if input has no value', () => { 
        const onAddCategory = jest.fn();
        render(<AddCategory onAddCategory={onAddCategory}/>)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: {value: ''} });
        fireEvent.submit(form);
        expect(input.value).toBe('');
        expect(onAddCategory).not.toHaveBeenCalled();
      })
 })