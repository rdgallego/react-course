import { getSaludo } from "../../src/base-pruebas/02-template-string";

/* eslint-disable no-undef */
describe('Prueba en 02-template-string', () => {
    test('getSaludo debe retornar "Hola Fernando"', () => {
        const name = 'Fernando';
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`)
    })
})