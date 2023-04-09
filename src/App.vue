<!-- El fichero App.vue vendría a ser el main. Es el fichero principal, desde el que se importan
los componentes, y donde se dan los valores a las propiedades-->

<template>

  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- Componente con title -->
  <!-- <Counter title="Entraron" /> -->
  <!-- Componente sin title. Saltará el string establecido por defecto -->
  <!-- <Counter :start="1" /> -->
  <Indecision />
  <!-- el v-bind se puede expresar con dos puntos : -->
  <!-- sirve para enviar información al componente sin necesidad de invocar un evento -->
</template>

<script>

//import Counter from './components/Counter.vue'
import Indecision from './components/Indecision.vue'

export default {
  name: 'App',
  components: {
    //Counter
    Indecision
  }
}  
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
