/* eslint-disable no-undef */
import { renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks";
import { act } from "react-dom/test-utils";

describe('Pruebas en useForm', () => { 
    const initialForm = {
        name: 'Fernando',
        email: 'fernando@gmail.com'
    }
    test('should return default values', () => { 
        const {result} = renderHook(() => useForm(initialForm))
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        })
     })

     test('should change name of the form', () => { 
        const {result} = renderHook(() => useForm(initialForm))
        const {onInputChange} = result.current;

        act(() => {
            onInputChange({target:{
                name: 'name',
                value: 'Roberto'
            }})
        })

        expect(result.current.name).toBe('Roberto');
        expect(result.current.formState).toEqual({ name: 'Roberto', email: 'fernando@gmail.com' })
      })

      test('should reset name of the form', () => { 
        const {result} = renderHook(() => useForm(initialForm))
        const {onInputChange, onResetForm} = result.current;

        act(() => {
            onInputChange({target:{
                name: 'name',
                value: 'Roberto'
            }})

            onResetForm();
        })

        expect(result.current.name).toBe('Fernando');
        expect(result.current.formState).toEqual({ name: 'Fernando', email: 'fernando@gmail.com' })
      })
 })