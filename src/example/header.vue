<template>
  <div id="headerExample">
    <div class="page-header-main">
      <loli-header fixed msg="这是solt">
      固定在顶部
    </loli-header>
    </div>
     <loli-header msg="这是solt">
        标题过长会隐藏后面的内容啊哈哈哈哈
    </loli-header>
     <loli-header msg="这是solt">
      <div slot="left">恩</div>
        左边有文案
    </loli-header>
     <loli-header msg="这是solt">
      <router-link to="/" slot="left">返回</router-link>
        左边可点击
    </loli-header>
    <loli-header msg="这是solt">
        右边文案
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


