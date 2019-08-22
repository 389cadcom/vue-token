<template>
<transition name="fade">
  <div class="toast" v-show="show">{{text}}</div>
</transition>
</template>
<script>
export default {
  props: {
    time: {
      type: Number,
      default: 2000
    },
    type: {
      type: String,
      default: 'text'
    },
    text: String,
    position: {
      type: String,
      default: 'center'
    }
  }
}
</script>
<style>
.toast{
  position: fixed;
  padding: 10px;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, .8);
  border-radius: 8px;
  color: #fff;
  z-index: 999
}
.fade-enter-active, .fade-leave-active{
  transition: .5s ease-out;
}
.fade-enter, .fade-leave-active{
  opacity: 0;
}
</style>
