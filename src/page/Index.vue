<template>
  <div>
      <div class="top_bg">
          <div class="flex-container">
              <div class="flex-1">
                  <img src="../../static/logo.png" alt="">
              </div>
              <div class="flex-4">
                  <p class="tel">{{data.tel}}</p>
                  <p class="address">{{data.address}}<font>({{data.shopname}})</font></p>
              </div>
          </div>
          <div class="flex-container topnum">
              <div class="flex-1">
                  <p class="font">回访总数</p>
                  <p class="num">{{data.num}}</p>
              </div>
              <div class="flex-1">
                <p class="font">已完成</p>
                <p class="num">{{data.alnum}}</p>
              </div>
              <div class="flex-1">
                <p class="font">未完成</p>
                <p class="num">{{data.unnum}}</p>
              </div>
          </div>
      </div>
      <div class="icon_list">
        <div class="flex-container">
            <div class="flex-1">
                <span class="icon icon1" v-bind:class="[{'icon2':!data.ispresale}]"></span>
                <p>商机线索</p>
            </div>
            <div class="flex-1">
                <span class="icon icon3" v-bind:class="[{'icon4':data.ispresale}]"></span>
                <p>售后维系</p>
            </div>
            <div class="flex-1">
                <span class="icon icon5"></span>
                <p>拨打电话</p>
            </div>
        </div>
        <div class="flex-container">
            <div class="flex-1">
                <span class="icon icon6"></span>
                <p>挂机短信</p>
            </div>
            <div class="flex-1">
                <span class="icon icon7"></span>
                <p>电话录音</p>
            </div>
            <div class="flex-1">
                <span class="icon icon8"></span>
                <p>历史统计</p>
            </div>
        </div>
      </div>

      <div class="grey">

      </div>
      <div class="content_list">
          <div class="list_item flex-container">
              <i class="icon share flex-1"></i>
              <div  class="flex-5">

                <p>分享</p>
              </div>
              <i class="icon back flex-1"></i>
          </div>
          <div class="list_item flex-container">
              <i class="icon info flex-1"></i>
              <div  class="flex-5">

                <p>关于我们</p>
              </div>
              <i class="icon back flex-1"></i>
          </div>
          <div class="list_item flex-container">
              <i class="icon advice flex-1"></i>
              <div  class="flex-5">

                <p>意见反馈</p>
              </div>
              <i class="icon back flex-1"></i>
          </div>
      </div>
  </div>
</template>

<script>
    import {
        getConfig
    } from 'Utils';
    import Vue from 'vue/dist/vue.js'
    export default {
        name: 'index',
        data() {
            return {
                show: true,
                data:{
                    tel:'13920160612',
                    address:'玛莎拉蒂中国',
                    num:100,
                    alnum:60,
                    unnum:40,
                    shopname:'上海一特点',
                    ispresale:true
                }
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
  @import '../styles/_reset.scss';
    .grey{
      width: 100%;
      height: 20px;
      background-color:#E8ECF0;
    }
    .content_list .list_item i{
      width: 16px;
height: 16px;
max-width: 16px;
vertical-align: top;
margin: 13px 16px 0px 13px;
    }
    .content_list .list_item .share {
    background-position: -139px -139px;
        margin: 14px 16px 0px 15px;
}
.info{    background-position: -155px -138px;
    min-width: 17px;
    min-height: 17px;}
.advice{    background-position: -172px -138px;
    min-width: 17px;
    min-height: 17px;}
    .content_list .list_item{
      width: 100%;
height: 45px;
border-bottom: 1px #F1F2F2 solid;
      .back{display: inline-block;background-image: url('../../static/cutter-1_23.png');height: 32px;
      width: 100%;background-repeat: no-repeat;    background-size: 64%;
    margin: 13px 10px 0px 5px;}
      p{
        width: 100%;
height: 100%;
line-height: 45px;
color: #333;
font-size: 16px;
      }
    }
    .icon_list{height: 198px;}

    .icon{
      background-image: url('../../static/sprite.png');
      display: inline-block;
    }
    .icon_list{
      text-align: center;
    }
    .icon_list span{width: 45px;height: 45px}
    .icon1{
      background-position: 0px 0px;
    }
    .icon2{
      background-position: -47px 0px;
    }
    .icon3{
      background-position: -93px 0px;
    }
    .icon3{
      background-position: -93px 0px;
    }
    .icon4{
          background-position: -93px -46px;
    }
    .icon5{
              background-position: -139px 0px;
    }
    .icon6{

background-position: -185px 0px;
}
    .icon7{
                background-position: 0px -46px;
    }
    .icon8{
            background-position: -46px -46px;
    }
    .icon_list p{    font-size: 16px;
    color: #666;
    line-height: 30px;}
    .icon_list .flex-1{margin-top: 15px}
    .top_bg{
      width: 100%;
      height: 140px;
      background-image: url('../../static/bg_blue.png');
      img{
        border-radius: 100px;
        border: 6px #55A6E9 solid;
        max-width: 50px;
        max-height: 50px;
            margin: 9px 11px 0px 13px;
      }
      .topnum .flex-1{height: 52px;border-right: 1px #51A3E5 solid;text-align: center;}

      .topnum .font{
        font-size: 17px;
color: #fff;
line-height: 32px;
      }
      .topnum .num{
        font-size: 22px;
        color: #D3FFFF;
      }
      .tel{
        font-size: 22px;
color: #fff;
margin-top: 13px;
line-height: 37px;
      }
      .address{
        color: #fff;
        font-size: 13px;
        font-weight: bold;
        font{
          margin-left: 3px;
        }
      }
    }
</style>
