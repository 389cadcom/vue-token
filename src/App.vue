<template>
  <div id="app">
    <div class="h1">欢迎你浏览啊</div>
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
    <!-- <loading :show="bool" text="loading"></loading> -->
  </div>
</template>

<script>
import Loading from './plugins/loading/Loading'
export default {
  name: 'App',
  data() {
    return {
      bool: true
    }
  },
  components: {
    Loading,
  },
  watch: {
    '$route'(to, from) {
      document.title = to.meta.title
      // console.log(this.$route.meta.keepAlive);
    }
  },
  mounted () {
    var count = this.$store.getters['root/isRoot']

    this.$toast('加载中...')
    setTimeout(() => {
      this.bool = false
    }, 3000)

  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.h1{
  color: red;
  text-transform: uppercase;
  margin-top: 100px;
  text-align: center;
  font-size: 2rem;
  line-height: 1;
  animation: letterspacing 1s infinite alternate ease-in-out;
  display: block;
  letter-spacing: .5rem;
}
@keyframes letterspacing {
  to {
    letter-spacing: -35px;
    opacity: 0;
  }
  from{
    letter-spacing: 20px;
  }
}
</style>
