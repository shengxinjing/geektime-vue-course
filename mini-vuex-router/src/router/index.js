// import {
//     createRouter,
//     createWebHashHistory,
//   } from 'vue-router'
import {
      createRouter,
      createWebHashHistory,
  } from './grouter/index'
  import Home from '../pages/Home.vue'
  import About from '../pages/About.vue'
  import Counter from '../components/Counter.vue'
  import Todojsx from '../components/Todo.jsx'
  import Heading from '../pages/Head.vue'

  import Rate from '../pages/Rate.vue'
  
  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter
    },
    {
      path: '/rate',
      name: 'Rate',
      component: Rate
    },
    {
      path: '/heading',
      name: 'Heading',
      component: Heading
    },
    {
      path: '/todojsx',
      name: 'Todojsx',
      component: Todojsx
    },
  ]
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  
  export default router
  