<template>
<div>
  Edit
  <hr/>
  <A />
  <B />
</div>
</template>
<script>
import A from './edit/a.vue';
import B from './edit/b.vue';

export default {
  name: 'Edit',
  components: {
    A,
    B
  },
  mounted () {
    this.getData()
  },
  beforeDestroy () {
    this.$bus.$off('a-click')
    this.$bus.$off('b-click')
  },
  methods: {
    getData() {

    }
  },
}
</script>
<style scoped>

</style>
