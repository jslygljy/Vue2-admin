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
import callphone from './page/Callphone.vue'
import phonevideo from './page/Phonevideo.vue'

import {
    InfiniteScroll
} from 'mint-ui';


Vue.component('InfiniteScroll', InfiniteScroll);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: index },
        { path: '/home', component: home },
        { path: '/index', component: index },
        { path: '/callphone', component: callphone },
        { path: '/phonevideo', component: phonevideo },
        { path: '*', component: index },
    ]
})

var vm = new Vue({
    router,
    el: "#app"
        // template: `
        //   <div class="name">
        //     <ul>
        //       <li><router-link to="/">首页</router-link></li>
        //       <li><router-link to="/home">hone页面</router-link></li>
        //     </ul>
        //     <transition name='fade2' mode="out-in">
        //         <router-view> </router-view>
        //     </transition>
        //
        //   </div>
        // `,
}).$mount('#app')