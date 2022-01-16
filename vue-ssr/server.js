
   
const express = require('express')
const app = express()
const Vue = require('vue') // vue@next
const renderer3 = require('@vue/server-renderer')
const vue3Compile= require('@vue/compiler-ssr')

const vueapp = {
  template: `<div>
    <h1 @click="add">{{num}}</h1>
    <ul >
      <li v-for="(todo,n) in todos" >{{n+1}}--{{todo}}</li>
    </ul>
  </div>`,
  data(){
    return {
      num:1,
      todos:['吃饭','睡觉','学习Vue']
    }
  },
  methods:{
    add(){
      this.num++
    }
  } 
}
vueapp.ssrRender = new Function('require',vue3Compile.compile(vueapp.template).code)(require)

app.get('/',async function(req,res){
  let vapp = Vue.createSSRApp(vueapp)
  let html = await renderer3.renderToString(vapp)
  const title = "Vue SSR"
  let ret = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <link rel="icon" href="/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
</head>
<body>
  <div id="app">
    ${html}
  </div>
</body>
</html>`    
  res.send(ret)
})
app.listen(9093,()=>{
    console.log('listen 9093')
}) 