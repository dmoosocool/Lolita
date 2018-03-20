<template>
  <transition name="loli-actionsheet-mask">
    <div class="loli-mask" v-show="isMaskShow" @click="onClickMask"></div>
  </transition>
</template>
<script>
export default {
  props:{
    isMaskShow:{
      type:Boolean,
      required:true
    },
    closeOnClickMask:{
      type:Boolean,
    }
  },
  methods:{
    onClickMask(){
      this.$emit('clickMask');
    }
  }
};
</script>
<style lang="stylus" scoped>
.loli-mask
  position: fixed
  z-index 100
  width: 100%
  height: 100%
  top: 0
  left: 0
  background-color: rgba(0, 0, 0, 0.7)
  transition: 0.2s ease-out
.loli-actionsheet-mask-enter,
.loli-actionsheet-mask-leave-active
  opacity 0
</style>
