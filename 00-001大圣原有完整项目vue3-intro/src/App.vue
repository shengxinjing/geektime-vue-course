
<template>
  <p>
    <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
    <router-link to="/"> Home</router-link> | 
    <router-link to="/about">About</router-link> | 
    <router-link to="/counter">Counter</router-link> | 
    <router-link to="/rate">Rate</router-link> | 
    <router-link to="/heading">heading</router-link> | 
    <router-link to="/todojsx">Todojsx</router-link> | 
  </p>
  <router-view ></router-view>

</template>

<script setup>
</script>

<style scoped>
/* route transitions */
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out; 
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in; 
}
</style>