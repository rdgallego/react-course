import { renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter";
import { act } from "react-dom/test-utils";

/* eslint-disable no-undef */
describe('Prueba en el useCounter', () => { 
    test('should return default values', () => { 
        
        const { result } = renderHook( () => useCounter());
        const { counter, decrement, increment, restart} = result.current;
        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(restart).toEqual(expect.any(Function));
     })

    test('should generate counter with value 100', () => { 
        const { result } = renderHook( () => useCounter(100));
        const { counter, decrement, increment, restart} = result.current;
        expect(counter).toBe(100);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(restart).toEqual(expect.any(Function));
    });

    test('should increment counter', () => { 
        const { result } = renderHook( () => useCounter(10));
        const { increment } = result.current;
        act(() => {
            increment()
        });
        expect(result.current.counter).toBe(11)
    })

    test('should decrement counter', () => { 
        const { result } = renderHook( () => useCounter(10));
        const { decrement } = result.current;
        act(() => {
            decrement()
        });
        expect(result.current.counter).toBe(9)
    })

    test('should restart counter', () => { 
        const { result } = renderHook( () => useCounter(10));
        const { decrement, restart } = result.current;
        act(() => {
            decrement();
            restart();
        });
        expect(result.current.counter).toBe(10)
    })
 })