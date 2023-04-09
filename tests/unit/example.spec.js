
describe('Example Component', () => {

  test('Debe ser mayor a 10', () => {

    // Preparar
    let value = 10

    // Estímulo
    value = value + 2

    // Observar el resultado 
    expect(value).toBeGreaterThan(10)

  })  


})