/* eslint-disable no-unused-vars */
import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

/* eslint-disable no-undef */
describe('Pruebas en FirstApp', () => { 
    test('debe hace match con el snapshot', () => { 
        const subtitle = 123;
        const { container } = render( <FirstApp subtitle={subtitle}/> );
        expect(container).toMatchSnapshot();
     })

     test('debe de mostrar el subtitulo en un h1', () => { 
        const subtitle = 123;
        const { container, getByText, getByTestId } = render( <FirstApp subtitle={subtitle}/> );

        expect(getByText(subtitle*2)).toBeTruthy();

/*         const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain('Hola, Soy Roberto'); */

        expect(getByTestId('test-title').innerHTML).toContain('Hola, Soy Roberto')
      })

      test('deberia de mostrar el title mandado por props', () => { 

        const subtitle = 123;
        const title = 'Hola, soy Goku';
        const { getByText } = render( <FirstApp title={title} subtitle={subtitle}/> );

        expect(getByText(title).innerHTML).toContain('Hola, soy Goku');

       })
 })