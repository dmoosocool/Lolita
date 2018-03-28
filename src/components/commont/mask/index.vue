<template>
  <transition name="fade" >
    <div class="mask" v-if='isShow' @click='tapMaskClose'></div>
  </transition>
</template>
<script>
export default {
  props:{
    isShow:{
      type:Boolean
    }
  },
  methods:{
    tapMaskClose(){
      this.$emit('tapMask');
    }
  }
};
</script>

<style lang="stylus" scoped>
.mask
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  background: rgba(0,0,0,.7)
  z-index: 100
  transition 0.2s easy-out
  .fade-enter-active, .fade-leave-active
    transition: 0.2s
  .fade-enter, .fade-leave-to
    opacity: 0
</style>
