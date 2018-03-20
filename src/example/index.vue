<template>
  <div id="example">
    <div class="header">
        <img class="logo" src="../assets/lolita-logo.jpeg"/>
        <br/>
        <p class="words">{{ msg }}</p>
    </div>
    <loli-accordion title="基础组件" show>
      <template v-for="item in routers.base">
        <loli-accordion-item :key="item.text">
          <router-link :to="{ path: item.path}">{{item.text}}</router-link>
        </loli-accordion-item>
      </template>
    </loli-accordion>

    <loli-accordion title="表单">
      <template v-for="item in routers.form">
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
            text: 'Accordion - 手风琴',
            path: 'accordion'
          },
          {
            text: 'Header - 头部',
            path: 'Header'
          },
          {
            text: 'Popup - 弹出框',
            path: 'popup'
          },
          {
            text: 'Loading - 加载',
            path: 'loading'
          },
          {
            text: 'Progress - 进度条',
            path: 'progress'
          },
          {
            text: 'Step - 步骤',
            path: 'step'
          },
          {
            text: 'Dialog - 对话框',
            path: 'dialog'
          },
          {
            text: 'Message - 消息框',
            path: 'message'
          }
        ],
        form: [
          {
            text: 'Button - 按钮',
            path: 'button'
          },
          {
            text: 'Selection - checkBox',
            path: 'selection'
          },
          {
            text: 'Seletor - 选择器',
            path: 'Seletor'
          },
          {
            text: 'Radio - 单选框',
            path: 'radio'
          },
          {
            text: 'CheckBox - 复选框',
            path: 'checkBox'
          }
        ]
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
#example {
  .loli-accordion-group {
    margin-bottom: 10px;
  }

  a {
    display: block;
  }
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
