/* eslint-disable no-undef */
test('Esta prueba no debe de fallar', () => {
    const message1 = 'Hola mundo'

    const message2 = message1.trim();

    expect(message1).toBe(message2)
})