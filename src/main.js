import Vue from 'vue'
import Vonic from 'vonic'

// Page Components
import Index from './views/Index.vue'
import About from './views/About.vue'

// Routes
const routes = [
  { path: '/', component: Index },
  { path: '/about', component: About }
]
// 启动应用
Vue.use(Vonic.app, {
  routes: routes
})
