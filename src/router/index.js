import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import TheAuth from '../components/TheAuth.vue';
import YourBlog from '../components/YourBlog.vue';
import FavoriteBlog from '../components/FavoriteBlog.vue';
import AddBlog from '../components/AddBlog.vue';
const routes = [
  {
    path:'/',redirect:'/home'
  },
  {
    path:'/home',component:HomePage
  },
  {
    path:'/auth', component:TheAuth
  },
  {
    path:'/yourblog',component:YourBlog
  },
  {
    path:'/favorite' , component:FavoriteBlog
  },
  
  {
    path:'/addblog' , component:AddBlog
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
