<template>
  <div id="example">
    <div class="demo-block-title">
      <span>手风琴 - 基础用法</span>
    </div>

    <loli-accordion title="基础组件">
      <loli-accordion-item text="基础组件1"/>
      <loli-accordion-item text="基础组件2"/>
      <loli-accordion-item text="基础组件3"/>
      <loli-accordion-item text="基础组件4"/>
      <loli-accordion-item text="基础组件5"/>
    </loli-accordion>

    <div class="demo-block-title">
      <span>手风琴 - 加路由</span>
    </div>

    <loli-accordion title="基础组件">
      <template v-for="item in routers">
        <loli-accordion-item :key="item.text">
          <router-link :to="{ path: item.path}">{{item.text}}</router-link>
        </loli-accordion-item>
      </template>
    </loli-accordion>

    <div class="demo-block-title">
      <span>手风琴 - 自定义</span>
    </div>

    <loli-accordion title="基础组件">
      <div style="margin-top:20px">
        <span>这里是一个自定义<span style="color:red">内容</span></span>
      </div>
    </loli-accordion>

  </div>
</template>
<script>
export default {
  name: 'example-accordion',
  data(){
    return {
      routers: [
        {
          text: 'Layout - 布局',
          path: 'layout'
        },
        {
          text: 'Button - 按钮',
          path: 'button'
        },
        {
          text: 'Accordion - 手风琴',
          path: 'accordion'
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.loli-accordion-item a
  display block    
</style>
