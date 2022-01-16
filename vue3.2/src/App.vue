<script setup>
import {ref} from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import useMouse from './mouse'
let num = ref(1)
function add(){
  num.value++
}

let {x,y} = useMouse()
</script>

<template>
<h1 @click="add">{{num}}</h1>
<div>
  {{x}},
  {{y}}
</div>
<hr>
<HelloWorld />
</template>

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
