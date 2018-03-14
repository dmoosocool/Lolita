<template>
  <div id="example">
    <loli-Header msg="这是solt">
      <router-link to="/button" slot="left">返回</router-link>
        这是标题
      <div slot="right">分享</div>
    </loli-Header>
  </div>
</template>
<script>
export default {

};
</script>
<style lang="stylus" scoped>
#example .loli-header {
  background-color: #26a2ff;
  color: #fff;
}
</style>


