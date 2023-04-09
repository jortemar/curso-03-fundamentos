import {shallowMount, mount} from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {

    // antes de cada prueba inicializamos el wrapper
    // para asegurarnos de eliminar valores residuales
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(Counter)
    })

    // test('Debe hacer match con el snapshot', () => {
    //     const wrapper = shallowMount(Counter)
    //     expect(wrapper.html()).toMatchSnapshot()
    // })

    // EVALUACIÓN DE VALORES DE ETIQUETAS HTML
    test('h2 debe tener el valor por defecto "Counter"', () => {
        //const wrapper = shallowMount(Counter)
        //expect(wrapper.find('h10').exists()).toBe(true)
        expect(wrapper.find('h2').exists()).toBeTruthy()
        const h2Value = wrapper.find('h2').text()
        expect(h2Value).toBe('Counter')
    })

    // USANDO UN DATA-ATRIBUTE ESPECÍFICO
    test('el valor por defecto en el p debe ser 100', () => {
        // const wrapper = shallowMount(Counter)
        // const pTags = wrapper.findAll('p')
        const value = wrapper.find('[data-testid="counter"]').text()
        //expect( pTags[1].text() ).toBe('100')
        expect(value).toBe('100')
    })

    // EVALUACIÓN DE EVENTOS
    test('debe incrementar y decrementar el contador', async() => {

        const [increaseBtn, decreaseBtn] = wrapper.findAll('button')
        // primero se genera la estructura, y después se renderiza nuevamente
        // al ejecutar los métodos tenemos que esperar a que termine todo eso
        // para poder evaluar correctamente el funcionamiento de nuestro método
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        let value = wrapper.find('[data-testid="counter"]').text()
        expect(value).toBe('101')
    })

    // EVALUACIÓN DE PROPIEDADES
    test('debe establecer el valor por defecto', () => {
        //const start = wrapper.props('start')
        const {start} = wrapper.props()
        // nos aseguramos del tipo de valor que estamos recibiendo
        //console.log(typeof(start))
        const value = wrapper.find('[data-testid="counter"]').text()
        expect(Number(value)).toBe(start)
    })

    // EVALUACIÓN DE RECEPCIÓN DE PROPIEDADES
    // volvemos a declarar el wrapper porque queremos aislar esta prueba del resto
    test('debe mostrar la prop title', () => {

        const title = 'Hola Mundo!!!!'

        const wrapper = shallowMount(Counter , {
            props: {
                title,
                // start: '5'
            }
        })

        expect( wrapper.find('h2').text() ).toBe(title)
    })

})