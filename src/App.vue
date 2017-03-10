<template>
    <div id="app">
        <!-- for example router view -->

        <!-- set progressbar -->
        <vue-progress-bar></vue-progress-bar>

        <nav>
            vue2 Admin
        </nav>

        <sidebar></sidebar>
        <!-- 
        <aside class="leftnav">
          <p>list</p>
          <ul class="menu-list">
            <li v-for="(item, index) in menu">
                  <router-link :to="item.path" v-if="item.path" @click.stop="item.show = !item.show">
                      <Icon :type="item.meta.icon" :size="22"></Icon>
                      {{ item.meta.label || item.name }}
                      <Icon type="chevron-down" :size="22" v-if="item.children && item.children.length"></Icon>
                  </router-link>
                  {{item.show}}
                  <div class="second" v-if="item.children && item.children.length && item.show">
                      <router-link :to="seditem.path" v-if="seditem.path" v-for="seditem in item.children">  
                          {{ seditem.name }}
                      </router-link>
                  </div>
            </li>
          </ul>
          
          <ul>
              <li>
                <Icon type="ios-speedometer" size="22"></Icon>
                <router-link to="/main">dashboard</router-link>
                <Icon type="chevron-down"></Icon>
              </li>
              <li>
                <Icon type="stats-bars" size="22"></Icon>
                
                <router-link to="/main">chars</router-link>
                <Icon type="chevron-down"></Icon>
                  <li><router-link to="/user/foo">chars/foo</router-link></li>
                  <li><router-link to="/user/foo/profile">chars/profile</router-link></li>
                  <li><router-link to="/user/foo/posts">chars/posts</router-link></li>
              </li>
              <li>
                <i></i>
                <router-link to="/login">login</router-link>
              </li>
              <li>
                <i></i>
                <router-link to="/resgit">resgit</router-link>
              </li>
          </ul>
          
        </aside>
        -->
        <section class="mainApp">
            <div class="contaner">
                <router-view></router-view>
            </div>
        </section>
    </div>
</template>

<script>
import { Icon } from 'iview'
import 'iview/dist/styles/iview.css';


import Sidebar from 'components/layout/Siderbar.vue'
// import store from 'store'


export default {
  components: {
    Icon,
    Sidebar
  },

  mounted () {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish();
  },
  data (){
    return {
      menu:[
        {
          name: 'Dashboard',
          path: '/dashboard',
          meta: {
            icon: 'ios-speedometer'
          },
          show:false
        },
        {
          name: 'Charts',
          path: '/charts',
          meta: {
            icon: 'stats-bars'
          },
          show:false,
          children: [
            {
              name: 'Chartist',
              path: '/chartist'
            },
            {
              name: 'Chartjs',
              path: '/chartjs'
            },
            {
              name: 'Peity',
              path: '/peity'
            }
          ]
        }
      ]
      
    }
  },
  methods: {
    toggle(item) {
      item.done = !item.done
    }
  },
  created () {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start();
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        // parse meta tags
        this.$Progress.parseMeta(meta)
      }
      //  start the progress bar
      this.$Progress.start()
      //  continue to next page
      next()
    });
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      this.$Progress.finish()
    });
    var currLan = store.get('currLan') || setting.language.default;
    this.$store.dispatch('updateCurrLan', currLan);
  }
}
</script>
<style lang="scss">
  @import "styles/_reset.scss";
    nav{
      width: 100%;
      height: 40px;
      line-height: 40px;
      background-color: #fff;
      text-align: center;
      position: fixed;
      box-shadow: 0 2px 3px rgba(17,17,17,.1) 0 0 0 1px rgba(17,17,17,.1);
      border-bottom: 1px #ccc solid;
      z-index: 1024;
    }
    
    
    li{
      font-size:16px;
    }
    li:hover a{
      color:#23D160;
    }
    li:hover{
      color:#23D160;
      background:#ccc;
    }

    .leftnav{
      position: fixed;
      top: 50px;
      left: 0px;
      bottom: 0px;
      width: 180px;
      height: calc(100%-50px);
      z-index: 1023;
      overflow-y: auto;
      overflow-x: hidden;
      border-right: 1px #ccc solid;
      box-shadow: 0 2px 3px rgba(17,17,17,.1) 0 0 0 1px rgba(17,17,17,.1);
    }
    .mainApp{
      padding-top: 50px;
      margin-left: 180px;
      background-color:#F5F5F5;
      .contaner{
        padding: 20px;
      }
    }
</style>
