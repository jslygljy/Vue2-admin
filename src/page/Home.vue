<template>
  <div>
      <button type="button" v-on:click="show = !show" class="btn btn-default">toggle button</button>

  </div>
</template>

<script>
    import {
        getConfig
    } from 'Utils';
    import Vue from 'vue/dist/vue.js'

    export default {
        name: 'home',
        data() {
            return {
                show: true
            };
        },
        mounted: function() {
            getConfig(config => {
                // Vue.http.post(config.rush.confirm, {}).then(res => {
                //     console.log(res)
                // }, err => {
                //     console.log(err);
                // });
            });
        }

    }
</script>
<style lang="scss">

</style>
