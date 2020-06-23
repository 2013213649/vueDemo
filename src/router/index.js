import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
const   Home = () => import('@/views/home/Home');
const   Profile = () => import('@/views/profile/Profile');
const   Cart = () => import('@/views/cart/Cart');
const   Category = () => import('@/views/category/Category');

  const routes = [
    {
      path:'',
      redirect:'/home',
      meta:{
        title:'首页'
      }
    },{
      path:'/home',
      component:Home,
      meta:{
        title:'首页'
      }
    },{
      path:'/profile',
      component:Profile,
      meta:{
        title:'我的'
      }
    },{
      path:'/cart',
      component:Cart,
      meta:{
        title:'分类'
      }
    },{
      path:'/category',
      component:Category,
      meta:{
        title:'购物车'
      }
    }
]

const router = new VueRouter({
  routes,
  mode:'history'
});

export default router
