<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <pull-refresh @load="loadHandler">
      <ul class="list">
        <router-link to="/edit" tag="li">edit</router-link>
        <router-link to="/about" tag="li">no-data</router-link>
        <router-link to="/list" tag="li">list</router-link>
        <router-link to="/login" tag="li">login</router-link>
        <li @click="logoutHandler">logout</li>
      </ul>
    </pull-refresh>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PullRefresh from '@/components/Pull-Refresh.vue'

export default {
  name: 'Hello',
  components: {
    PullRefresh,
  },
  data () {
    return {
      msg: 'Hello Vuex',
    }
  },
  computed: {
    ...mapState([
      'count',
      'status'
    ])
  },
  mounted () {

  },
  methods: {
    loadHandler(resolve){
      setTimeout(resolve, 1000)

      console.log('loaded');
    },
    logoutHandler() {
      this.$store.dispatch('logout').then( res => {
        console.log(res);
      })
    }
  },
}
</script>

<style>
.list li{
  line-height: 24px;
  border-bottom: 1px solid rgba(255, 0, 0, .2);
  margin-bottom: 5px;
}
</style>
