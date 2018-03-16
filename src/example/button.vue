<template>
  <div id="example">
    <div class="demo-block-title">
      <span>按钮类型</span>
    </div>

    <loli-button type="default" tag="button" size="large" @click="log(1)">默认按钮</loli-button>
    <loli-button type="primary" tag="button" size="large">主要按钮</loli-button>
    <loli-button type="warning" tag="button" size="large">警告按钮</loli-button>

    <div class="demo-block-title">
      <span>禁用状态</span>
    </div>
    <loli-button type="default" tag="button" size="large" disabled @click="log(2)">禁用默认按钮</loli-button>
    <loli-button type="primary" tag="button" size="large" disabled>禁用主要按钮</loli-button>
    <loli-button type="warning" tag="button" size="large" disabled>禁用警告按钮</loli-button>

    <div class="demo-block-title">
      <span>按钮大小</span>
    </div>
    <loli-button type="default" tag="button" size="large">大按钮</loli-button><br/>
    <loli-button type="default" tag="button" size="normal">正常按钮</loli-button><br/>
    <loli-button type="default" tag="button" size="small">小按钮</loli-button>

  </div>
</template>
<script>
export default {
  name: 'example-button',
  methods: {
    log: function(text) {
      console.log(text);
    }
  }
};
</script>

<style lang="stylus" scoped>
#example .loli-button {
  margin: 5px 0;
}
</style>
