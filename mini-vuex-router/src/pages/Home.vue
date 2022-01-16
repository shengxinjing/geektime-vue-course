<template>
  <!-- <div class="box" :style="{width:width+'px'}"></div>
  <button @click="change">click</button>-->
  <!-- <div class="box1"></div> -->
  <!-- <button @click="toggle">click</button>
  <transition name="fade">
    <h1 v-if="showTitle">你好 Vue 3</h1>
  </transition>-->
  <!-- <Heading :level="3">hello geekbang</Heading> -->
  <TodoList></TodoList>
  <!-- <h1 v-if="num==1">{{title}}</h1>
  <h2 v-if="num==2">{{title}}</h2>
  <h3 v-if="num==3">{{title}}</h3>
  <h4 v-if="num==4">{{title}}</h4>
  <h5 v-if="num==5">{{title}}</h5>
  <h6 v-if="num==6">{{title}}</h6>-->
</template>

<script setup>
import { ref } from 'vue'
import TodoList from '../components/TodoList.vue'
let showTitle = ref(true)
function toggle() {
  showTitle.value = !showTitle.value
}

let width = ref(100)
function change() {
  width.value += 100
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.box {
  background: #d88986;
  height: 100px;
  transition: width 1s linear alternate both;
}
.box1 {
  width: 30px;
  height: 30px;
  position: relative;
  background: #d88986;
  animation: move 2s linear infinite;
}
@keyframes move {
  0% {
    left: 0px;
  }
  50% {
    left: 200px;
  }
  100% {
    left: 0;
  }
}
/* animation: move 2s linear 3 alternate both; */

/* div{  width: 40px;  height: 40px;  border-radius: 50%;  background: #0ff;  animation: move 2s linear 3 alternate both;}@keyframes move{  0%{    transform: translate(0,0);  }  100%{    transform: translate(200px,0);  }} */
</style>