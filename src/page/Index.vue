<template>
  <div>
    <p>{{$store.state.a.count}}---{{$store.state.b.countB}}</p>
    <p>
      <button @click="$store.commit('jia',10)">+</button>
      <button @click="$store.commit('jian',10)">-</button>
    </p>
    <p>
      <button @click="jiatwo">+20</button>
      <button @click="jiantwo">-20</button>
    </p>
  </div>
</template>

<script>
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default {
    name:'app',
    data(){
      return {

      }
    },
    computed:{
      // ...mapState([
      //   "count"
      // ]),
      // ...mapGetters([
      //   "count"
      // ])
    },
    methods:{
      ...mapMutations([
        'jia',
        'jian'
      ]),

      ...mapActions({
        jiatwo:'jiatwo',
        jiantwo:'jiantwo'
      })
    }
}
</script>
