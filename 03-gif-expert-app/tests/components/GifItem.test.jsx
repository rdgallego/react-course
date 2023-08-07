/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components"

describe('Pruebas archuvo GifItem', () => { 
    const title = 'saitama';
    const url = 'https://google.es/Saitama.jpg'

    test('should match snapshot', () => { 
        const {container} = render(<GifItem title={title} url={url}/>)
        expect(container).toMatchSnapshot();
     })

    test('should render image with url and alt', () => { 
        render(<GifItem title={title} url={url}/>)
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
     })
     test('should show image title', () => { 
        render(<GifItem title={title} url={url}/>)
        expect(screen.getByText(title)).toBeTruthy();
      })
 })