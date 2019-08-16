<template>
<div>
  登录
</div>
</template>
<script>
export default {
  computed: {
    backPath() {
      return this.$route.query.redirect;
    }
  },
  mounted () {
    //登录请求
    var url = this.backPath ? this.backPath : '/'
    this.$store.dispatch('login', {user: 'lonve'}).then( res => {
      this.$router.replace(url)
    })
  },
}
</script>
<style scoped>

</style>
