<template>
  <div class="loli-col" :class="{[`loli-col-${span}`]: span, [`loli-col-offset-${offset}`]: offset}" :style="style">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'loli-col',
  props: {
    span: [Number, String],
    offset: [Number, String]
  },
  computed: {
    gutter() {
      return (this.$parent && Number(this.$parent.gutter)) || 0;
    },

    style() {
      const padding = `${this.gutter / 2}px`;
      return this.gutter ? { paddingLeft: padding, paddingRight: padding } : {};
    }
  }
};
</script>
