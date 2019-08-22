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
<style lang="scss">
@import './assets/sass/_reset.scss';
@import './assets/sass/_utils.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.ellipsis{
  width: 100%;
  @extend %ellipsis;
}
.multi2{
  @include ellipsis(2);
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
