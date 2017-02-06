<template>
    <div id="app">
        <!-- for example router view -->

        <!-- set progressbar -->
        <vue-progress-bar></vue-progress-bar>

        <nav>
            vue2 Admin
        </nav>

        <aside class="leftnav">
          <p>list</p>
          <ul>
              <li>
                <i></i>
                <router-link to="/main">dashboard</router-link>
              </li>
              <li>
                <i></i>
                <router-link to="/main">chars</router-link>

                  <li><router-link to="/user/foo">chars/foo</router-link></li>
                  <li><router-link to="/user/foo/profile">chars/profile</router-link></li>
                  <li><router-link to="/user/foo/posts">chars/posts</router-link></li>
                </ol>
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
        <section class="mainApp">
            <div class="contaner">
                <router-view></router-view>
            </div>
        </section>
    </div>
</template>

<script>
export default {
  mounted () {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish();
    console.log(this.$route)
  },
  created () {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start()
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
    })
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      this.$Progress.finish()
    })
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
      .contaner{
        padding: 20px;
      }
    }
</style>
