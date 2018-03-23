<template>
   <component :is="'header'" class="loli-header" :class="{'loli-header-isFixed':fixed}">
     <div class="loli-header-left">
        <slot name="left"></slot>
     </div>
     <h1 class="loli-title"><slot name="title"></slot></h1>
     <div class="loli-header-right">
       <slot name="right"></slot>
     </div>
  </component>
</template>
<script>
export default {
  name: 'loli-header',
  props: {
    fixed: Boolean,
  },
};
</script>
<style lang="stylus" scoped>
$bgColor = #fff;
$fontColor = #000;
.loli-header
  padding 0 10px
  height 46px
  line-height 46px
  box-sizing border-box
  display flex
  font-size 14px
  position relative
  white-space nowrap
  color $fontColor
  background-color $bgColor
  box-sizing border-box

  &:after
    content ' '
    position absolute
    top 0
    left 0
    width 200%
    height 200%
    transform scale(.5)
    transform-origin 0 0
    pointer-events none
    box-sizing border-box
    border 0px solid #e5e5e5
    border-bottom-width 1px

  &.loli-header-isFixed
    top 0
    right 0
    left 0
    position fixed
    z-index 1

  .loli-header-left, .loli-header-right
    flex .5
    line-height 46px

  .loli-header-left
    text-align left

  .loli-header-right
    text-align right

  .loli-title
    text-align center
    font-weight 400
    font-size inherit
    line-height 46px
    flex 1
    overflow hidden
    text-overflow ellipsis
    white-space nowrap
</style>


