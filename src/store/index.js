import { createStore } from 'vuex'
import BlogsModule from './blogs/index.js';
import AuthModule from './auth/index.js';
export default createStore({
  modules:{
    blogs:BlogsModule,
    auth:AuthModule
  },
})
