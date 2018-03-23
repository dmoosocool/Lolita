<template>
  <div id="headerExample">
    <div class="page-header-main">
      <loli-header fixed>
        <span slot="title">固定在顶部</span>
      </loli-header>
    </div>

    <loli-header>
        <span slot="title">标题过长会隐藏后面的内容啊哈哈哈哈</span>
    </loli-header>

    <loli-header >
      <div slot="left">恩</div>
      <span slot="title">左边有文案</span>
    </loli-header>

    <loli-header>
      <router-link to="/" slot="left">返回</router-link>
      <span slot="title">左边可点击</span>
    </loli-header>

    <loli-header>
      <span slot="title">右边文案</span>
      <div slot="right">哈</div>
    </loli-header>
  </div>
</template>
<script>
export default {
};
</script>
<style lang="stylus" scoped>
#headerExample {
  .loli-header {
    background-color: #26a2ff;
    color: #fff;
    margin-bottom: 40px;
  }

  .page-header-main {
    margin-top: 90px;
  }
}
</style>


