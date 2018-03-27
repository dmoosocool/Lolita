<template>
  <div id="example">
    <loli-header fixed>
      <router-link :to="{path: '/'}" slot="left">返回</router-link>
      <span slot="title">Dialog - 对话框</span>
    </loli-header>

    <div class="demo-block-title">
      <span>一个按钮的对话框</span>
    </div>
    <loli-button type="default" tag="button" @click="showOne">一个按钮的对话框</loli-button>

    <div class="demo-block-title">
      <span>两个按钮的对话框</span>
    </div>
    <loli-button type="default" tag="button" @click="showTwo">两个按钮的对话框</loli-button>

    <div class="demo-block-title">
      <span>带标题的对话框</span>
    </div>
    <loli-button type="default" tag="button" @click="showTitle">带标题的对话框</loli-button>

    <loli-dialog @status="getOneStatus" :show="isShowOne">只有一个按钮</loli-dialog>
    <loli-dialog @status="getTwoStatus" :show="isShowTwo" isTwo>两个按钮</loli-dialog>
    <loli-dialog @status="getTitleStatus" :show="isShowTitle" isTwo :title="'带标题的'">带标题的两个按钮</loli-dialog>

  </div>
</template>
<script>
export default {
  data() {
    return {
      isShowOne: false,
      isShowTwo: false,
      isShowTitle: false,
    };
  },
  mounted() {
  },
  methods: {
    showOne() {
      this.isShowOne = true;
    },
    getOneStatus(status) {
      this.isShowOne = false;
      console.log(status);
    },
    showTwo() {
      this.isShowTwo = true;
    },
    getTwoStatus(status) {
      this.isShowTwo = false;
      console.log(status);
    },
    showTitle() {
      this.isShowTitle = true;
    },
    getTitleStatus(status) {
      this.isShowTitle = false;
      console.log(status);
    },
  },
};
</script>
<style lang="stylus" scoped>
.loli-button
  margin-bottom 10px
</style>


