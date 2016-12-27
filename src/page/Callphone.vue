<template>
  <div class="phone">
      <navbar title="拨打电话" :show-menu="true"></navbar>
      <div class="phoneinput">
          <span>{{num}}</span>
          <i></i>
      </div>
      <div class="flex-container">
          <div class="flex-1" v-on:click="addnum">
              <p>1</p>
          </div>
          <div class="flex-1" v-on:click="addnum">
            <p>2</p>
          </div>
          <div class="flex-1" v-on:click="addnum">
            <p>3</p>
          </div>
      </div>
      <div class="flex-container">
          <div class="flex-1" v-on:click="addnum">
              <p>4</p>
          </div>
          <div class="flex-1" v-on:click="addnum">
            <p>5</p>
          </div>
          <div class="flex-1" v-on:click="addnum">
            <p>6</p>
          </div>
      </div>
      <div class="flex-container">
          <div class="flex-1" v-on:click="addnum">
              <p>7</p>
          </div>
          <div class="flex-1" v-on:click="addnum">
            <p>8</p>
          </div>
          <div class="flex-1" v-on:click="addnum">
            <p>9</p>
          </div>
      </div>
      <div class="flex-container last">
          <div class="flex-1" v-on:click="addnum">
              <p>*</p>
          </div>
          <div class="flex-1" v-on:click="addnum">
            <p>0</p>
          </div>
          <div class="flex-1" v-on:click="addnum">
            <p>#</p>
          </div>
      </div>
      <div class="tcenter">
          <span class="phone_icon"></span>
      </div>

  </div>
</template>

<script>
    import {
        getConfig
    } from 'Utils';
    import Vue from 'vue/dist/vue.js'
    import navbar from '../components/navbar'
    export default {
        name: 'Callphone',
        components: {
            navbar
        },
        data() {
            return {
                num: ''
            };
        },
        methods: {
            addnum: function(event) {
                if (this.num.length == 11) {
                    return
                }
                this.num = this.num + event.target.outerText;
            }
        },
        ready: {
            getlist: function() {
                getConfig(config => {
                    console.log(config)
                        // Vue.http.post(config.rush.confirm, {}).then(res => {
                        //     console.log(res)
                        // }, err => {
                        //     console.log(err);
                        // });
                })
            }

        }
    }
</script>
<style lang="scss">
    @import '../styles/_reset.scss';
    .phone {
        .phoneinput {
            height: 70px;
            span {
                display: inline-block;
                border: none;
                width: 17rem;
                height: 70px;
                line-height: 70px;
                font-size: 47px;
                color: #000;
                text-indent: 16px;
            }
            i {
                background-image: url('../../static/cutter_50.png');
                width: 23px;
                height: 13px;
                background-size: 23px 13px;
                display: inline-block;
                vertical-align: top;
                margin-top: 27px;
            }
        }
        .phone_icon {
            background-image: url('../../static/cutter_51.png');
            width: 50px;
            height: 50px;
            background-size: 50px;
            display: inline-block;
            margin-top: 3rem
        }
        .flex-container .flex-1 {
            height: 70px;
            line-height: 70px;
            text-align: center;
            border: 1px #ccc solid;
            border-left: none;
            border-bottom: none;
        }
        .flex-container.last {
            border-bottom: 1px #ccc solid;
        }
        .flex-container p {
            font-size: 40px;
            color: #000;
        }
    }
</style>