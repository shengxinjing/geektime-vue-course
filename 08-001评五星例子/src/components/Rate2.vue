<template>
  <div :style="fontstyle">
    <div class="rate" @mouseleave="mouseLeave">
      <span @mousemove="mousemove($event,num)" v-for="num in 5" :key="num">☆</span>
      <span class="hollow" :style="fontwidth">
        <!-- <span @mouseover="mouseOver(num)" v-for="num in 5" :key="num">★</span> -->
        <span @click="onRate"  @mousemove="mousemove($event,num)" v-for="num in 5" :key="num" >★</span>
      </span>
 
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed, ref } from "vue";
let props = defineProps({
  value: Number,
  theme: { type: String, default: "orange" },
});
console.log(props);
let rate = computed(() =>
  "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value)
);
const themeObj = {
  black: "#000",
  white: "#fff",
  red: "#f5222d",
  orange: "#fa541c",
  yellow: "#fadb14",
  green: "#73d13d",
  blue: "#40a9ff",
};
const fontstyle = computed(() => {
  return `color:${themeObj[props.theme]};`;
});
// 评分宽度
let width = ref(props.value);
// 不会冒泡，mouseout存在闪烁问题
function mouseLeave() {
  (debounce(()=>{
      width.value = props.value;
  },100))()
}
function mousemove(event,num){
  (debounce(()=>{
      let layerX = event.layerX;
      const offsetWidth = event.target.offsetWidth;
      if(!isZero(layerX,offsetWidth)){
          if(isMoreThanHalf(layerX,offsetWidth)){
              width.value = num;
          }else{
              width.value = num - 0.5;
          }
      }else{
          width.value = 0;
      }
  },100))();
}

// 简单防抖函数
function debounce(fn,time){
  let timer = null;
  return ()=>{
      timer = setTimeout(()=>{
          if(timer){
              clearTimeout(timer)
          }
          fn();
      },time)
  }
}
// 计算当前鼠标是否超过一半
function isMoreThanHalf(x,width){
  const remainder = x % width;
  return remainder >= width / 2;
}
//是否清空
function isZero(x,width){
  return x < width / 2 / 2;
}
const fontwidth = computed(() => `width:${width.value}em;`);
let emits = defineEmits(["update-rate"]); // 定义emits
function onRate() {
  emits("update-rate", width.value); //通过@引用
}
</script>

<style scoped>
.rate {
  position: relative;
  display: inline-block;
  font-size: 14px;
}
.rate span {
  display: inline-block;
  width: 14px;
}
.rate > span.hollow {
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0;
  width: 0;
  overflow: hidden;
  white-space: nowrap;
}
</style>