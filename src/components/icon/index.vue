<template>
  <i class="anticon" :class="(icon + '').indexOf('-') > -1 ? 'icon-' + icon.replace(/\-/g, '') : 'icon-' + icon"></i>
</template>

<script>
export default {
  name: 'loli-icon',
  props: {
    icon: {
      type: String
    }
  }
};
</script>
