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
<style scoped>
  .loli-button {
    color:rebeccapurple;
  }
</style>
