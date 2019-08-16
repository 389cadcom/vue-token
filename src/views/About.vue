<template>
<div>
  <no-data tips="暂无停车数据" icon="empty2"></no-data>
</div>
</template>
<script>
import NoData from '@/components/common/no-data'
export default {
  components: {
    NoData,
  },
  mounted () {

  },
  methods: {
    beforeDestroy () {
      console.log('beforeDestroy About');
    },
  },
}
</script>
<style scoped>

</style>
