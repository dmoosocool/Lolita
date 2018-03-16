<template>
  <div class="loli-row" :style="style">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'loli-row',
  props: {
    gutter: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    style() {
      const margin = `-${Number(this.gutter / 2)}px`;
      return this.gutter ? { marginLeft: margin, marginRight: margin } : {};
    }
  }
};
</script>

