import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SearchHero } from "../../../src/heroes/pages/SearchHero"

/* eslint-disable no-undef */

const mockedUseNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}))
describe('pruebas en search hero', () => { 
    test('should show default values', () => { 
        const {container} = render(
            <MemoryRouter>
                <SearchHero/>
            </MemoryRouter>
        )

        expect(container).toMatchSnapshot();
     })

     test('should show batman', () => { 
        render(
            <MemoryRouter initialEntries={['/search?q=Batman']}>
                <SearchHero/>
            </MemoryRouter>
        )
        const input = screen.getByRole('textbox')
        expect(input.value).toBe('Batman');

        const img = screen.getByRole('img')
        expect(img.src).toContain('/assets/heroes/dc-batman.jpg');
      })

      test('should show error if cant find hero', () => { 
            render(
                <MemoryRouter initialEntries={['/search?q=cantfind']}>
                    <SearchHero/>
                </MemoryRouter>
            )
            const input = screen.getByRole('textbox')
            expect(input.value).toBe('cantfind');

            expect(screen.findByText('No hero with cantfind')).toBeTruthy();
       })

      test('should call navigate to new page ', () => { 
            render(
                <MemoryRouter initialEntries={['/search']}>
                    <SearchHero/>
                </MemoryRouter>
            )
            const input = screen.getByRole('textbox')
            fireEvent.input(input, { target: {value: 'cantfind'} });

            const form = screen.getByLabelText('form');
            fireEvent.submit(form);
            expect(mockedUseNavigate).toHaveBeenCalledWith('?q=cantfind');
       })
 })