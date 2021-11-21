<template>
  <button @click="toggle">click</button>
  <transition name="fade">
    <h1 v-if="showTitle">你好 Vue 3</h1>
  </transition>

  <!-- <h1 v-if="showTitle">你好 Vue 3</h1> -->
</template>
<script setup>
import { ref } from "vue";
let showTitle = ref(true);
function toggle() {
  showTitle.value = !showTitle.value;
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
</style>
