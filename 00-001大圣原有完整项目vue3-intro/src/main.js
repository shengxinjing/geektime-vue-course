import { createApp } from 'vue'
import Element3 from 'element3'
import 'element3/lib/theme-chalk/index.css'
import store from './store/index'
import App from './App.vue'
import router from './router/index'
// import Heading from './components/Head.js'
window.onerror = function(e){
    // console.log(['https://stackoverflow.com/search?q=[js]+'+e])
}
const app = createApp(App)

app.use(store)
    .use(router)
    .use(Element3)
    .mount('#app')




// import {reactive,computed,watchEffect} from 'vue'

// let obj = reactive({
//     count:1
// })
// let double = computed(()=>obj.count*2)
// obj.count = 2

// watchEffect(()=>{
//     console.log('数据被修改了',obj.count,double.value)
// })