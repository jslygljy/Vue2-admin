import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
 count :44
}
// computed 函数
//触发状态 (同步)
const mutations = {
  jia(state,n){
   state.count += n
  },
  jian(state,n){
   state.count -= n
  }
}

//计算数据变化属性  感觉类似 computed
const getters = {
  count :function(state){
    return state.count += 100
  }
}

// vue中methods方法
// 异步执行方法。  ajax放这里
const actions = {
  jiatwo (context){
    context.commit('jia',20);

  },
  jiantwo ({commit}){
    commit('jian',20)
  }
}

// 模块化  模块组
const moduleA ={
  state,
  mutations,
  getters,
  actions
}

const moduleB ={
  state:{countB:99}
}

export default new Vuex.Store({
  modules :{
    a:moduleA,
    b:moduleB
  }
})
