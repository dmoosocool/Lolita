<template>
  <div id="example" style="padding-left:0; padding-right:0;">

    <loli-message :text="tipsText" :time="2000" :show="tipStatus" @messageCb="tipStatus = false"/>

    <loli-header fixed>
      <router-link :to="{path: '/'}" slot="left">返回</router-link>
      <span slot="title">Header - 头部</span>
    </loli-header>

    <div class="demo-block-title">
      <span>导航 - 内容过长会隐藏</span>
    </div>

    <loli-header>
        <span slot="title">白日依山尽，黄河入海流。欲穷千里目，更上一层楼。</span>
    </loli-header>

    <div class="demo-block-title">
      <span>导航 - 左边按钮</span>
    </div>

    <loli-header>
      <div slot="left" @click="showtip('点击左边文字返回按钮')">返回</div>
      <span slot="title">白日依山尽，黄河入海流。欲穷千里目，更上一层楼。</span>
    </loli-header>

    <div class="demo-block-title">
      <span>导航 - 右边按钮</span>
    </div>

    <loli-header>
      <span slot="title">白日依山尽，黄河入海流。欲穷千里目，更上一层楼。</span>
      <div slot="right" @click="showtip('点击右边文字菜单按钮')">菜单</div>
    </loli-header>

    <div class="demo-block-title">
      <span>导航 - 带图标</span>
    </div>

    <loli-header>
      <div slot="left" @click="showtip('点击左边图标按钮')"><loli-icon icon="left"/></div>
      <span slot="title">白日依山尽，黄河入海流。欲穷千里目，更上一层楼。</span>
      <div slot="right" @click="showtip('点击右边图标按钮')"><loli-icon icon="ellipsis"/></div>
    </loli-header>

    <div class="demo-block-title">
      <span>导航 - 带路由</span>
    </div>

    <loli-header>
      <div slot="left"><router-link :to="{path: '/'}" slot="left">返回首页</router-link></div>
      <span slot="title">白日依山尽，黄河入海流。欲穷千里目，更上一层楼。</span>
    </loli-header>
  </div>
</template>
<script>
export default {
  data(){
    return {
      tipStatus: false,
      tipsText: ''
    };
  },
  methods:{
    showtip (text) {
      this.tipsText = text;
      this.tipStatus = true;
    }
  }
};
</script>
<style lang="stylus" scoped>
#example
  min-height 1000px
  .demo-block-title
    margin-left: 20px;
</style>


