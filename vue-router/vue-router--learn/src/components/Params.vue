<template>
    <div>
      <h2> {{msg}}</h2> 
      <p>newsId:{{$route.params.newsId}}</p>
      <p>newsTitle:{{$route.params.newsTitle}}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg: ' This is Params Page'
        }
    },
    beforeRouteEnter (to, from, next) {
        console.log('准备进入Params 页面')
        next();
    },
    beforeRouteLeave (to, from, next) {
        console.log('准备离开Params 页面')
        next()
    }
}
</script>
<style scoped>

</style>