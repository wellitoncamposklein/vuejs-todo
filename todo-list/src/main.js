// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

/* =======
*  ROUTER
*  =======
*/
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

/* =======
*  RESOURCE
*  =======
*/
import VueResource from 'vue-resource'

Vue.use(VueResource)

const router = new VueRouter({
  mode: 'history',
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: `
    <div id="app">
      <transition name="fade" mode="out-in">
        <router-view class="view"></router-view>
      </transition>
    </div>
  `,
  components: { App }
})
