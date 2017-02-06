<template>
    <section class="app-main">
        <div class="container is-fluid is-marginless app-content">
            <!-- 主要的面包  -->
            <!-- <lavelbar></lavelbar> -->
            <transition
              mode="out-in"
              enter-active-class="fadeIn"
              leave-active-class="fadeOut"
              appear>
              <router-view class="animated"></touer-view>
            </transition>
        </div>
    </section>
</template>

<script>
import

export default{
}
</script>

<style lang="scss">
    .app-main{
      padding-top: 50px;
      margin-left: 180px;
      transform: translate3d(0,0,0);
    }
    .app-content{
      padding-top: 20px;
    }

</style>
