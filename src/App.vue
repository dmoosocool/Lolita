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
* {
  padding: 0;
  margin: 0;
}

body {
  color: #333;
  line-height: 1;
  background-color: #fcfcfc;
  font-family: Arial, Helvetica, STHeiti STXihei, Microsoft YaHei, Tohoma, sans-serif;
  -webkit-font-smoothing: antialiased;
}

#example {
  padding: 0 15px;
}

#example .demo-block-title {
  padding: 20px 15px 20px 0;
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  color: rgba(69, 90, 100, 0.6);
}
</style>
