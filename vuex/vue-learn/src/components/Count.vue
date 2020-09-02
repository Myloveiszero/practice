<template>
    <div>
        <h2>{{msg}}</h2><hr/>
        <h3>{{$store.state.count}}--{{count}}</h3>
        <div>
            <button @click="countAdd(10)">+</button>
            <button @click="countRed">-</button>
        </div>
          <div>
            <button @click="addAction">+</button>
            <button @click="reduceAction">-</button>
        </div>
    </div>
</template>
<script>
import store from '../store/index'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {
            msg: '欢迎进入Count页面'
        }   
    },
    // --- 1 ---
    // computed: {
    //     count() {
    //         return this.$store.state.count
    //     }
    // },
    // --- 2 ---
    // computed: mapState({
    //     count: state => state.count
    // }),
    // --- 3 ---
    computed: {
        ...mapState(['count']),
        ...mapGetters(['count'])
        },
    methods:{
        ...mapMutations(['countAdd', 'countRed']), 
        ...mapActions(['addAction','reduceAction'])
    },
     store
}
</script>