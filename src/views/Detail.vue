<template>
<div>
  {{ newsId }}
</div>
</template>
<script>
/**
 * 缓存数据问题  keep-alive
 * 列表、详情缓存数据--使用watch侦听$route id的变化
 * 若不设置缓存， 不会触发watch方法
 */

export default {
  watch: {
    '$route'(to, from) {
      if(to.path.includes('/detail') && this.newsId != this.$route.params.id){
        // console.log('watch getData');
      }
    }
  },
  data() {
    return {
      newsId: ''
    }
  },
  mounted () {
    this.newsId = this.$route.params.id
    this.getData()
  },
  activated() {
    console.log(this.newsId);
  },
  methods: {
    getData() {
      console.log('getData');
    },
  },
}
</script>
<style scoped>

</style>
