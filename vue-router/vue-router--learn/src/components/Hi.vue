<template>
    <div class="hello">
        {{msg}}
    <router-view class="aaa"></router-view>
    </div>
</template>
<script>
export default {
    name: "hi",
    data() {
        return {
            msg: "你好！ Hi 页面"
        }
    },
}
</script>
<style lang=""scope>
    
</style>