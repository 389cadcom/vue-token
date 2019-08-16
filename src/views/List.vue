<template>
<div>
  <ul>
    <router-link tag="li" to="/detail/1">1</router-link>
    <router-link tag="li" to="/detail/2">2</router-link>
    <router-link tag="li" to="/detail/3">3</router-link>
    <router-link tag="li" to="/detail/4">4</router-link>
  </ul>
</div>
</template>
<script>
export default {
  mounted () {
    console.log('list mounted');
  },
}
</script>
<style scoped>

</style>
