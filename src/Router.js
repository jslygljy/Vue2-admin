// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const fir = { template: '<div>first内容</div>' }
const sec = { template: '<div>sec内容</div>' }
const home = { template: '<div>home内容</div>' }
const view = {
    template: `
        <div class="view">
            <h2>组件</h2>
            <router-view class="name"></router-view>
        </div>
    `
}
const firstFirst = { template: '<div>{{$route.name}}的第一个子菜单{{$route.params.id}}</div>' }
const firstSencond = { template: '<div>这是第一个toggle的第二个子菜单{{$route.params.id}}</div>' }

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', name: 'home', component: home },
        {
            path: '/fir',
            name: 'first',
            component: view,
            children: [
                { path: '/', component: fir, name: 'first' },
                { path: 'first', component: firstFirst, name: 'firstFirst' },
                { path: 'sed', component: firstSencond, name: 'firstSencond' },
            ]
        },
        { path: '/sec', name: 'second', component: sec },
    ]
})

new Vue({
    router,
    template: `
        <div>
            <p>{{$route.name}}</p>
            <ul>
                <li><router-link to="/">home</router-link></li>
                <li><router-link to="/fir">first</router-link></li>
                    <ol>
                        <li><router-link :to="{name:'firstFirst',params:{id:123}}">first</router-link></li>

                        <li><router-link :to="{name:'firstSencond',params:{id:321}}">sed</router-link></li>
                    </ol>
                <li>
                <router-link to="/sec">sec</router-link></li>
            </ul>
            <router-view class="view one" ></router-view>
            <router-view class="view one" name='left' style="float:left;width:20%;background-color:#ff6600"></router-view>
            <router-view class="view one" name='right' style="float:left;width:20%;background-color:#ccc"></router-view>
        </div>
    `
}).$mount('#app')
