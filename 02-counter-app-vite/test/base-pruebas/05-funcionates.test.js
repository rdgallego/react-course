import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

/* eslint-disable no-undef */
describe('Prueba en 05', () => {

    test('getUser debe de retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(testUser);
    })

    test('getUsuario debe retornar un objeto', () => {
        const name = 'Fernando';

        const user = getUsuarioActivo(name);

        expect(user).toEqual({
            uid: 'ABC567',
            username: 'Fernando'
        })
    })
})