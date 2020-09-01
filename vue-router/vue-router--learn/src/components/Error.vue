<template>
    <div>
        {{msg}}
        <h1>抱歉！您要找的页面没有找到！</h1>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg: 'Error: 404 '
        }
    },
}
</script>