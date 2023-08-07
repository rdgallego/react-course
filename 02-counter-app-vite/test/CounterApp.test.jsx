import { CounterApp } from "../src/CounterApp"
import { fireEvent, render, screen } from "@testing-library/react";
/* eslint-disable no-undef */
describe('Pruebas CounterApp', () => {
    const value = 100;
    test('debe hacer match con el snapshot', () => {
        const {container} = render(<CounterApp value = {value}/>);

        expect(container).toMatchSnapshot();
     })

     test('debe hacer match con el snapshot', () => {
        render(<CounterApp value = {value}/>);

        expect(screen.getByText(value)).toBeTruthy();
        expect(screen.getByRole('heading', {level:2}).innerHTML).toContain(value.toString());
     })

     test('debe aumentar en uno al hacer click en el boton sumar', () => { 
        render(<CounterApp value = {value}/>);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('101').innerHTML).toBeTruthy();
      })

      test('debe decrementar en uno al hacer click en el boton restar', () => { 
        render(<CounterApp value = {value}/>);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('99').innerHTML).toBeTruthy();
      })

      test('debe resetear al hacer click en el boton reset', () => { 
        render(<CounterApp value = {value}/>);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
        expect(screen.getByText('100').innerHTML).toBeTruthy();
      })
 })