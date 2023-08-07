import { types } from "../../../src/auth/types/types"

/* eslint-disable no-undef */
describe('pruebas sobre los types', () => { 
    test('should return types', () => { 
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        })
     })
 })