


import Vue from 'vue'
import Router from 'vue-router'
import DianCan from '@/view/DianCan'
import PingJia from '@/view/PingJia'
import ShangJia from '@/view/ShangJia'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/diancan",
      meta:{
        title:"饿了吗"
      },
      component:DianCan
    },
    {
      path:"/pingjia",
      meta:{
        title:"评价"
      },
      component:PingJia
    },
    {
      path:"/shangjia",
      meta:{
        title:"商家"
      },
      component:ShangJia
    },
    {
      path:"*",
      redirect:"/diancan"
    }
  ]
})
