<template>
  <component
    :is="tag"
    :type="nativeType"
    :disabled="disabled"
    class="loli-button"
    :class="[
      'loli-button--' + type,
      'loli-button--' + size,
      {
        'loli-button--disabled': disabled,
        'loli-button--loading': loading,
        'loli-button--block': block
      }
    ]"
    @click="onClick"
  >
    <span class="loli-button__text">
      <slot>{{ text }}</slot>
    </span>
  </component>
</template>

<script>
export default {
  name: 'loli-button',
  props: {
    text: String,
    block: Boolean,
    loading: Boolean,
    disabled: Boolean,
    nativeType: String,
    tag: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    }
  },
  methods: {
    onClick(event) {
      if(!this.loading && !this.disabled) {
        this.$emit('click', event);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  $defaultColor = #fff
  $primaryColor = #0469c8
  $warningColor = #e94f4f
  // 按钮基本样式
  .loli-button
    display inline-block
    text-align center
    padding 13px 0
    line-height 28px
    font-size 18px
    border-radius 6px
    box-sizing border-box
    opacity .9
    outline none
    // 默认按钮样式
    &--default
      color #000
      background-color $defaultColor
      border 1px solid darken($defaultColor, 20%)
      &:active
        background darken($defaultColor, 10%)
        color: darken(#000, 10%)

    // 主要按钮
    &--primary
      color #fff
      background-color $primaryColor
      border 1px solid darken($primaryColor, 20%)
      &:active
        background darken($primaryColor, 10%)
        color darken(#fff, 10%)

    // 警告按钮
    &--warning
      color #fff
      background-color $warningColor
      border 1px solid darken($warningColor, 20%)
      &:active
        background-color darken($warningColor, 10%)
        color darken(#fff, 10%)

    // 禁用样式
    &--disabled
      pointer-events none
      color rgba(255, 255, 255, .6)
      opacity .4

    // 默认大小
    &--normal
      padding 5px 10px
      font-size 14px
    // 小按钮
    &--small
      padding 0 6px
      font-size 10px
    // 大按钮
    &--large
      width 100%

  // 默认按钮的禁用字体颜色
  .loli-button--default.loli-button--disabled
    color #000
</style>
