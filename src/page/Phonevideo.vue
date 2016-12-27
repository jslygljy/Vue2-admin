<template>
  <div class="phone">
      <navbar title="电话录音" :show-menu="true"></navbar>
      <div class="searchstatus">
          <p class="status">
              <font>通话成功</font>
              <i></i>
          </p>
          <div class="search_right">
              <input type="text">
              <i></i>
          </div>
      </div>
       <div class="list_item flex-container" v-for="item in list">
          <div class="flex-1">
              <i v-if="item.status=1" class=""></i>
              <i v-if="item.status=2" class=""></i>
          </div>
          <div class="flex-3">
              <p class="tel">{{item.tel}}</p>
              <p class="date">{{item.date}}</p>
          </div>
          <div class="flex-2">
              <p class="time">{{item.time}}</p>
              <i></i>
          </div>
        </div>
      
  </div>
</template>

<script>
    import {
        getConfig
    } from 'Utils';


    import navbar from '../components/navbar'

    import Vue from 'vue';
    import {
        InfiniteScroll
    } from 'mint-ui';
    Vue.use(InfiniteScroll);
    export default {
        name: 'Phonevideo',
        components: {
            navbar
        },
        data() {
            return {
                num: '',
                list: [{
                    tel: '1'
                }, {
                    tel: '1'
                }, {
                    tel: '1'
                }, ],
                loading: false
            };
        },
        methods: {
            addnum: function(event) {
                if (this.num.length == 11) {
                    return
                }
                this.num = this.num + event.target.outerText;
            },
            loadMore() {
                this.loading = true;
                setTimeout(() => {
                    let last = this.list[this.list.length - 1];
                    for (let i = 1; i <= 10; i++) {
                        this.list.push(last + i);
                    }
                    this.loading = false;
                }, 2500);
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
    /*@import 'mint-ui/lib/infinite-scroll/style.css';*/
    
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