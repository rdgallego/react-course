/* eslint-disable no-undef */
import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-test', () => { 
    test('getHeroeById debe de retornar un heroe por ID', () => { 
        const id = 1;
        const hero = getHeroeById(id)

        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
     });

     test('getHeroeById debe no de retornar un heroe por ID si no existe', () => { 
        const id = 100;
        const hero = getHeroeById(id)

        expect(hero).toEqual(undefined)
     });

     test('getHeroesByOwner debe de retornar los heroes de DC', () => { 
        const owner = 'DC';
        const heroesResp = getHeroesByOwner(owner);

        expect(heroesResp).toHaveLength(3);
        expect(heroesResp).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))
      })

      test('getHeroesByOwner debe de retornar los heroes de Marvel', () => { 
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes).toHaveLength(2);
      })
})