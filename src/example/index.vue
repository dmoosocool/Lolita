<template>
  <div id="example">
    <div class="header">
        <img class="logo" src="../assets/lolita-logo.jpeg"/>
        <br/>
        <p class="words">{{ msg }}</p>
    </div>
    <loli-accordion title="基础组件">
      <template v-for="item in routers.base">
        <loli-accordion-item :key="item.text">
          <router-link :to="{ path: item.path}">{{item.text}}</router-link>
        </loli-accordion-item>
      </template>
    </loli-accordion>
  </div>
</template>

<script>
import Button from '@/components/button';

export default {
  name: 'UIExample',
  data() {
    return {
      routers: {
        // 基础组件
        base: [
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
          },
          {
            text: 'Header - 头部',
            path: 'Header'
          }
        ],
      },
      msg: 'Lolita 移动端 Vue 组件库'
    };
  },
  mounted() {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
#example a {
  display: block;
}

.header {
  text-align: center;
  margin: 20px 0;

  .logo {
    width: 50%;
    margin: 0 auto;
  }

  .words {
    margin: 8px 0;
    font-size: 14px;
    color: #456a64;
  }
}
</style>
