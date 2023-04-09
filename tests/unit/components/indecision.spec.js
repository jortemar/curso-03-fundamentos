import {shallowMount} from '@vue/test-utils'
import Indecision from '@/components/Indecision'

describe('Indecision Component', () => {

    // antes de cada prueba inicializamos el wrapper
    // para asegurarnos de eliminar valores residuales
    let wrapper
    let clgSpy
    // de esta forma resolvemos el problema de window.fetch, ya que esas variables
    // no existen en node. Sí tiene global, muy parecida a window
    global.fetch = jest.fn( () => Promise.resolve({
        json: () => Promise.resolve({
            answer: 'yes',
            forced: false,
            image: 'https://yesno.wtf/assets/yes/2.gif'
        })
    }))

    beforeEach(() => {
        wrapper = shallowMount(Indecision)

        clgSpy = jest.spyOn(console, 'log')
        jest.clearAllMocks()
    })

    // CHEQUEAR SNAPSHOT
    test('Debe hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Escribir en el input no debe disparar nada (console.log)', async() => {
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')

        const input = wrapper. find('input')
        await input.setValue('Hola Mundo')

        //expect(clgSpy).toHaveBeenCalled()
        expect(clgSpy).toHaveBeenCalledTimes(1)  
        //expect(getAnswerSpy).toHaveReturnedTimes(0)
        //expect(getAnswerSpy).toHaveBeenCalledTimes(0)
        expect(getAnswerSpy).not.toHaveBeenCalled()

        //console.log(wrapper.vm)
    })

    test('escribir el símbolo de ? debe disparar el getAnswer', async() => {
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')

        const input = wrapper. find('input')
        await input.setValue('Hola Mundo?')

        expect(clgSpy).toHaveBeenCalledTimes(2)  
        expect(getAnswerSpy).toHaveBeenCalled()
    })

    test('pruebas en getAnswer', async() => {
        await wrapper.vm.getAnswer()

        //console.log(wrapper.vm.img)
        //console.log(wrapper.vm.answer)
        const img = wrapper.find('img')

        expect( img.exists() ).toBeTruthy()
        expect( wrapper.vm.img).toBe('https://yesno.wtf/assets/yes/2.gif')
        expect( wrapper.vm.answer).toBe('Si!')

    })

    test('pruebas en getAnswer - Fallo en el API', async() => {
        
        fetch.mockImplementationOnce( () => Promise.reject('API is down') )

        await wrapper.vm.getAnswer()

        const img = wrapper.find('img')

        expect( img.exists() ).toBeFalsy()
        expect(wrapper.vm.answer).toBe('No se pudo cargar del API')

    })

})    