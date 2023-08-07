import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

/* eslint-disable no-undef */
describe('Preubas en 07-deses-arr', () => { 
    test('debe de retornar un string y un numero', () => { 
        const [letters, numbers] = retornaArreglo();

        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');
    })
})