/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components"
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => { 
    const category = 'One Punch'
    test('should show loading at start', () => { 
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        render(<GifGrid category={category}/>)
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
     })

     test('should show items when useFetchGifs ends', () => { 
        useFetchGifs.mockReturnValue({
            images: [{
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: 'ABC2',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }],
            isLoading: false
        })
        render(<GifGrid category={category}/>)
        expect(screen.getByText(category));
        expect(screen.getAllByRole('img').length).toBe(2)
     })
 })