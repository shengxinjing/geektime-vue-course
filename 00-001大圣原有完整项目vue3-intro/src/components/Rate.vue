<template>
  <div :style="fontstyle">
    <slot></slot>
    <div class="rate" @mouseout="mouseOut">
      <span @mouseover="mouseOver(num)" v-for="num in 5" :key="num">☆</span>
      <span class="hollow" :style="fontwidth">
        <span @click="onRate(num)" @mouseover="mouseOver(num)" v-for="num in 5" :key="num">★</span>
      </span>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed, ref } from 'vue';
let props = defineProps({
  modelValue: Number,
  theme: { type: String, default: 'orange' }
})
let emits = defineEmits(['update:modelValue'])
let rate = computed(() => "★★★★★☆☆☆☆☆".slice(5 - props.modelValue, 10 - props.modelValue))
function onRate(num) {
  emits('update:modelValue', num)
}
const themeObj = {
  'black': '#00',
  'white': '#fff',
  'red': '#f5222d',
  'orange': '#fa541c',
  'yellow': '#fadb14',
  'green': '#73d13d',
  'blue': '#40a9ff',
}
const fontstyle = computed(() => {
  return `color:${themeObj[props.theme]};`
})
// 评分宽度
let width = ref(props.modelValue)
function mouseOver(i) {
  width.value = i
}
function mouseOut() {
  width.value = props.modelValue
}
const fontwidth = computed(() => `width:${width.value}em;`)

</script>

<style scoped>
.rate {
  position: relative;
  display: inline-block;
}
.rate > span.hollow {
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0;
  width: 0;
  overflow: hidden;
}
</style>