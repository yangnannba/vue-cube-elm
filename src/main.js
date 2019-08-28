// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import Axios from 'axios'
Vue.prototype.$http=Axios


import './assets/fonts/iconfont.css'

import Cube from 'cube-ui'
Vue.use(Cube)

router.beforeEach((to,from,next)=>{
  window.document.title=to.meta.title;
  next();

})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
