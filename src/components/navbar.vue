<template>
  <section class="navbar-container">
    <!--返回按钮-->
    <a class="navbar-back" v-show="showMenu" onclick="window.history.back()">
      <i></i>
    </a>
    <p>{{title}}</p>
    <!--首页-->

    <a class="navbar-home" href="/" v-show="showMenu">
      <i></i>
    </a>
  </section>

</template>

<script>
export default {
  name: 'hello',
  props: ['title', 'showMenu'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style  lang="scss">
.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #F5F5F5;
  padding: 0.7rem;
  z-index: 1;
  color: #000;
  p {
    flex: 5;
    margin: 0;
    text-align: center;
    font-weight: 600;
  }
}

.navbar-icon {
  width: 0.625rem;
  height: 0.625rem;
  display: inline-block;
}

// 返回按钮
.navbar-back {
  flex: 1;
  i {

    @extend .navbar-icon;
    border-left: 3px solid #000;
    border-top: 3px solid #000;
    transform: rotate(-45deg);
  }
}

// 返回首页
.navbar-home {
  flex: 1;
  text-align: right;

  i {
    background-image: url('../../static/cutter_38.png');
    width: 21px;
height: 21px;
background-size: 21px;
margin-right: 5px;
    display: inline-block;
  }
}

</style>
