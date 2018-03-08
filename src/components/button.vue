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
        'loli-button--block': block,
        'loli-button--buttom-action': buttonAction
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
    buttonAction: Boolean,
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
  // 背景颜色
  bgColor = #0469c8
  // 按钮基本样式
  .loli-button
    display block
    text-align center
    width 100%
    padding 13px 0
    font-size 18px
    border-radius 6px
    box-sizing border-box
    // 默认按钮样式
    &--default
      color #fff
      opacity .9
      background-color bgColor
      &:active
        background darken(bgColor, 10%);
        color: darken(#fff, 10%)

    // 默认大小
    &--normal
      padding 13px 21.5px 13px 35.8px

</style>
