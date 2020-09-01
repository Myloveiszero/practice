<template>
    <div class="hello">
        {{msg}}
        {{$route.params.username}}
    </div>
</template>
<script>
export default {
    name: "hi",
    data() {
        return {
            msg: "你好！ Hi 1 页面"
        }
    },
}
</script>
<style lang=""scope>
    
</style>