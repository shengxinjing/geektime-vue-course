<!--这里是重点 -->
<template>
  <h1>你的评分是 {{ score }}</h1>
  <Rate :value="score" @update-rate="update"></Rate>

  <!-- <Rate :value="score"></Rate>
  <Rate :value="3"></Rate>
  <Rate :value="4" theme="red"></Rate>
  <Rate :value="1" theme="green"></Rate> -->
</template>
<script setup>
import { ref } from "vue";
import Rate from "./components/Rate2.vue";
let score = ref(2.5);
function update(num) {
  score.value = num;
}
</script>
