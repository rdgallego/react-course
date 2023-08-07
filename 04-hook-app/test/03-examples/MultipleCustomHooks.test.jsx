/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react"
import { BreakingBadQuotes } from "../../src/03-examples/MultipleCustomHooks"
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";
jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');
describe('Pruebas en MultipleCustomHooks', () => { 
    const increment = jest.fn();
    useCounter.mockReturnValue({counter: 1, increment: increment})

    beforeEach(() => {
        jest.clearAllMocks();
    })
    test('should show component by default', () => { 

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })

        render( <BreakingBadQuotes /> );
        expect(screen.getByText('Loading...'))

        const nextButton = screen.getByRole('button', {name: 'Next Quote'})
        expect(nextButton.disabled).toBeTruthy()
     })

     test('should show quote', () => { 
        useFetch.mockReturnValue({
            data: [{author: 'Fernando', quote: 'Hola mundo'}],
            isLoading: false,
            hasError: null
        })

        render( <BreakingBadQuotes /> );
        expect(screen.getByText('Hola mundo')).toBeTruthy();
        expect(screen.getByText('Fernando')).toBeTruthy();
      })

      test('should call increment function', () => { 

        useFetch.mockReturnValue({
            data: [{author: 'Fernando', quote: 'Hola mundo'}],
            isLoading: false,
            hasError: null
        })

        render( <BreakingBadQuotes /> );
        const nextButton = screen.getByRole('button', {name: 'Next Quote'})
        fireEvent.click(nextButton);
        expect(increment).toHaveBeenCalled();
       })
 })