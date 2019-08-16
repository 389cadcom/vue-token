<template>
<div class="pull-to-refresh-app">
  <div class="content-box">
    <div class="refreshing-box">{{tipText}}</div>
    <div class="present-box">
      <slot></slot>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      startY: '',
      endY: '',
      el: null,
      distance: 0,
      tipText: '下拉刷新',
    }
  },
  mounted () {
    this.el = document.querySelector('.content-box')
    this.touchHandler()
  },
  methods: {
    /**
     * 移动事件
     */
    touchHandler() {
      this.el.addEventListener('touchstart', this.touchStart)
      this.el.addEventListener('touchmove', this.touchMove)
      this.el.addEventListener('touchend', this.touchEnd)
    },
    touchStart(e){
      let touch = e.changedTouches[0]
      this.startY = touch.clientY
      this.tipText = '下拉刷新'
    },
    touchMove(e){
      let touch = e.changedTouches[0]
      let move  = touch.clientY - this.startY

      if(move > 0 && move < 100){
        this.el.style.marginTop = move + 'px'
        this.distance = move
        if(move > 50){
          this.tipText = '松开即可刷新'
        }
      }
    },
    touchEnd(e){
      let touch = e.changedTouches[0]
      this.endY = touch.clientY

      if(this.distance > 50){
        this.tipText = '数据加载中...'
        new Promise( (resolve, reject)=>{
          this.$emit('load', resolve)
        }).then(() => {
          this.render()
        })
      }else{
        this.render()
      }
    },
    //重新渲染页面
    render(){
      if(this.distance > 0){
        let timer = setInterval(() => {
          this.el.style.marginTop = --this.distance + 'px';
          var marginTop = this.el.style.marginTop.split('px')[0] * 1

          if(marginTop <= 0){
            clearInterval(timer)
            this.tipText = '下拉刷新'
            this.el.style.marginTop  = 0
          }
        }, 1)
      }
    }
  },
}
</script>
<style lang="scss" >
.pull-to-refresh-app {
  .content-box {
    height: 300px;
    position: relative;
    .refreshing-box {
      line-height: 40px;
      height: 40px;
      text-align: center;
    }
    .present-box {
      background-color: lighten(#c4e3f3, 10%);
    }
  }
}
</style>
