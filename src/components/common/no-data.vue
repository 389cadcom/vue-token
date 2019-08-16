<template>
<div class="no-data">
  <div class="icon" :class="icon"></div>
  <p class="tips">{{tips}}</p>
</div>
</template>
<script>
export default {
  props: {
    tips: {
      type: String,
      default: '网络不给力，请重试'
    },
    icon: {
      type:String,
      default: 'empty1'
    }
  },
}
</script>
<style lang="scss">
.no-data{
  box-sizing: border-box;
  background: #f5f5f5;
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 5rem;
  position: absolute;
  top: 0;
  .icon{
    width: 160px;
    height: 160px;
    margin: 0 auto;
    background:url(/static/images/empty.png)  no-repeat;  margin: 0 auto;
    background-size: 100%;
  }
  .tips{font-size: 16px; color: #666}
  .empty1{background-position:0 0;}
  .empty2{background-position:0 -160px;}
  .empty3{background-position:0 -320px;}
  .empty4{background-position:0 -480px;}
}
</style>
