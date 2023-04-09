<!-- escribiendo vue se crea la estructura del componente -->
<template>
    <!-- con la expresión || podemos añadir un valor por defecto {{ customTitle || 'Hola Mundo' }} -->
    <h2> {{ customTitle }} </h2>
    <p> {{ counter }} <sup>2</sup> = {{ squareCounter }} </p>
    <p data-testid="counter"> {{ counter }} </p>

    <div class="buttons-container">
        <!-- podemos usar @ para llamar eventos en lugar de v-on: -->
        <button @click="increase">+1</button>
        <button @click="decrease">-1</button>
    </div>
</template>

<script>
export default {
    // En props ponemos las propiedades del componente. Cuando creemos dos componentes
    // iguales, las vamos a utilizar para otorgarle características propias a cada uno de ellos
    // Al incluir title o start en props, estas pasan de ser atributos a propiedades
    // props: ['title', 'start'],
    props: {
        title: String,
        start: {
            type: Number,
            default: 100, // valor por defecto
            // required: true
            validator( value ) {
                return value >= 0
            }
            // con el validator podemos poner una condición a una de las propiedades
        }
    },
    // name: 'Patito'
    data() {
        return {
            counter: this.start
        }
    },
    methods: {
        getSquareValue() {
            return this.counter * this.counter
        },
        increase() {
            this.counter++
        },
        decrease() {
            this.counter--
        }
    },
    // Los métodos realizan la operación lógica tantas veces como es llamado.
    // Por contra, las propiedades computadas almacenan su resultado en caché.
    // De esta forma, si la función se llama varias veces, el cálculo 
    // solo se realiza una vez, rescatando su valor en memoria para las siguientes.
    // En este caso no habría que colocar paréntesis en la llamada a la función, ya que
    // lo que realmente estamos llamando es al valor que ha quedado en memoria

    // Las propiedades computadas siempre tienen que devolver algo
    computed: {
        squareCounter() {
            return this.counter * this.counter
        },
        customTitle() {
            // Tres formas de hacer lo mismo
            return this.title || 'Counter'

            // return this.title ? this.title : 'Counter'

            /*
            if (this.title) {
                return this.title
            } else
                return 'Counter'
            */
        }
    }
}
</script>

<style>

    button {
        background-color: #64BB87;
        border-radius: 5px;
        border: 1px solid white;
        color: white;
        cursor: pointer;
        margin: 0 5px;
        padding: 5px 15px;
        transition: 0.3s ease-in-out;
    }

    button:hover {
        background-color: #5aa67b;
        transition: 0.3s ease-in-out;
    }


</style>
