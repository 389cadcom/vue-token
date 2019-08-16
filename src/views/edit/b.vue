<template>
<div>
  <button @click="bHandler">按钮B</button>
  <span>{{ count }}</span>
</div>
</template>
<script>
export default {
  data() {
    return {
      count: ''
    }
  },
  mounted () {
    this.$bus.$on('a-click', args => {
      this.count = args
    })
  },
  beforeDestroy () {
    // console.log('beforeDestroy B');
  },
  methods: {
    bHandler() {
      this.$bus.$emit('b-click', 'B')
    }
  },
}
</script>
<style scoped>

</style>
