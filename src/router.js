import Vue from 'vue'
import Router from 'vue-router'
import Mybody from "./components/commou/Mybody.vue"
import Lunbo from "./components/commou/Lunbo.vue"
import Banner from "./components/commou/Banner.vue"
import Bofang from "./components/commou/Bofang.vue"
import index from "./components/index.vue"
import Foot from "./components/commou/Foot.vue"
import Zazhi from "./components/commou/Zazhi.vue"
import Headed from "./components/commou/Headed.vue"
import Login from "./components/commou/Login.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component:index},
    {path:'/Mybody',component:Mybody},
    {path:"/Lunbo",component:Lunbo},
    {path:"/Banner",component:Banner},
    {path:"/Bofang",component:Bofang},
    {path:"/Foot",component:Foot},
    {path:"/Zazhi",component:Zazhi},
    {path:"/Headed",component:Headed},
    {path:"/Login",component:Login},
  ],
  
})
