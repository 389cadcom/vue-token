<template>
<div>
  <button @click="aHandler">按钮A</button>
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
    // this.$parent.getData()

    this.$bus.$on('b-click', res => {
      this.count = res;
    })
  },
  beforeDestroy () {
    // console.log('beforeDestroy A');
  },
  methods: {
    aHandler() {
      this.$bus.$emit('a-click', 'A')
    }
  },
}
</script>
<style scoped>

</style>
