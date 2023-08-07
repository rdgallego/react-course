import { getImagen } from "../../src/base-pruebas/11-async-await"

/* eslint-disable no-undef */
describe('Pruebas 11-async.await', () => { 
    test('deberia devolver url gifs', async () => { 
        const resp = await getImagen();
        expect(resp).toBe('No se encontro el url');
     });
 })