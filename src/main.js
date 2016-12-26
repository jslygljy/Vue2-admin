// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue/dist/vue.js'
// vuex
import store from './store/index'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';
Vue.use(VueRouter);
Vue.use(VueResource)
    //页面模板
import home from './page/Home.vue'
import index from './page/Index.vue'
// const home = {
//     template: `
//         <div>home</div>
//     `
// }
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: index },
        { path: '/home', component: home },
        { path: '/index', component: index }
    ]
})

var vm = new Vue({
    router,
    template: `
      <div class="name">
        <transition name='fade2' mode="out-in">
          <router-view> </router-view>
      </transition>

      </div>
    `,
}).$mount('#app')