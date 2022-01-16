<script setup>
let num = $ref(1)
function add(){
  num++
}
</script>

<template>
<h1 @click="add">{{num}}</h1>
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
