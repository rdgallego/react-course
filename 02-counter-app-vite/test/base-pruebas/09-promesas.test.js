/* eslint-disable no-undef */
import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('pruebas 09-promersas', () => { 
    test('Debería devolver heroe en la promesa', (done) => { 
        const id = 1;
        getHeroeByIdAsync(id).then(hero => {
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });
            done();
        });
     });
     test('Debería obtener herror', (done) => { 
        const id = 100;
        getHeroeByIdAsync(id).catch(error => {
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        });
     })
 })