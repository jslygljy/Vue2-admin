// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';
import App from './App.vue'
import store from './store'
import VueProgressBar from 'vue-progressbar'

//import vuex from './page/Index.vue'


const charts = { template: '<div>charts</div>' }
const dashboard = { template: '<div>dashboard</div>' }
const chartist = { template: '<div>chartist</div>' }
const Chartjs = { template: '<div>Chartjs</div>' }
const Peity = { template: '<div>Peity</div>' }

const User = {
    template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
}
const UserHome = { template: '<div>Home</div>' }
const UserProfile = { template: '<div>Profile</div>' }
const UserPosts = { template: '<div>Posts</div>' }

const options = {
    color: '#bffaf3',
    failedColor: '#874b4b',
    thickness: '5px',
    transition: {
        speed: '0.2s',
        opacity: '0.6s'
    },
    autoRevert: true,
    location: 'top',
    inverse: false
}

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueProgressBar, options);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [{
            path: '/dashboard',
            component: dashboard
        },
        {
            path: '/user/:id',
            component: User,
            children: [
                { path: '', component: UserHome },
                { path: 'profile', component: UserProfile },
                { path: 'posts', component: UserPosts }
            ]
        },
        {
            path: '/charts',
            component: charts
        },
        {
            path: '/Chartist',
            component: charts
        },
        {
            path: '/Chartjs',
            component: charts
        },
        {
            path: '/Peity',
            component: charts
        },
        { path: '/main', name: 'main', component: vuex },
    ]
})

var vm = new Vue({
    router,
    store,
    //
    render: h => h(App)
}).$mount('#app')