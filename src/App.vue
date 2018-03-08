<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="stylus">
*
  padding 0
  margin 0

body
  color #333
  line-height 1
  background-color #f8f8f8
  font-family Arial,Helvetica,STHeiti STXihei,Microsoft YaHei,Tohoma,sans-serif
  -webkit-font-smoothing antialiased
</style>
