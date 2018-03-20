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
            text: 'Selection - checkBox',
            path: 'selection'
          },
          {
            text: 'Radio - 单项选择',
            path: 'radio'
          },
          {
            text: 'CheckBox - 复选框',
            path: 'checkBox'
          },
          {
          },{
            text: 'Header - 头部',
            path: 'Header'
          },
          {
            text: 'popup - 弹出框',
            path: 'popup'
          },{
            text:'loading -加载',
            path:'loading'
          },{
            text:'progress--进度条',
            path:'progress'
          },{
            text:'step--步骤',
            path:'step'
          },{
            text:'seletor--选择器',
            path:'Seletor'
          },{
            text:'Actionsheet--底部弹出框',
            path:'Actionsheet'
          }
        ],
      },
      msg: 'Lolita 移动端 Vue 组件库',
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
