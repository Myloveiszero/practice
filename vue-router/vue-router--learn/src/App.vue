<template>
  <div id="app">
    <div>
      <button @click="goTo">前进</button>
      <button @click="goBack">后退</button>
      <button @click="goHome">返回首页</button>
    </div>
    <div id="nav">
      <router-link to="/">首页</router-link>|
      <router-link to="/hi">Hi页面</router-link>|
      <router-link :to="{name:'Hi1',params:{username:'繁星'}}">Hi页面1</router-link>|
      <router-link to="/hi/hi2">Hi2页面</router-link>|
      <router-link to="/params/520/校园招聘">Params页面</router-link>|
      <router-link to="/goHome">返回首页</router-link>|
      <router-link to="/goParams/688/事业单位">去Params页面</router-link>|
      <router-link to="/hi1">Hi1首页</router-link>|
      <router-link to="/goHi1">GOHi1首页</router-link>|
    </div>
    <p>{{$route.name}}</p>
    <transition name="fade" mode="out-in">
      <router-view/>  
    </transition>
      <router-view
        name="left"
        style="float: left;width: 50%; height: 300px; background-color: pink">
      </router-view>
      <router-view
        name="right"
        style="float: right;width: 50%; height: 300px; background-color: blue">
      </router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  methods: {
    goTo() {
      this.$router.go(1)
    },
    goBack() {
      this.$router.go(-1)
    },
    goHome() {
      this.$router.push('/')
    }
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity .5s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  transition: opacity .5s;
}
</style>
