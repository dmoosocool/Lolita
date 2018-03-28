<template>
  <div id="example">
    <loli-header fixed>
      <router-link :to="{path: '/'}" slot="left">返回</router-link>
      <span slot="title">Message - 消息提示框</span>
    </loli-header>

    <div class="demo-block-title">
      <span>自动消失（默认500毫秒）</span>
    </div>

    <loli-button type="default" tag="button" @click="showIt1">自动消失（默认500毫秒）</loli-button>
    <loli-message :text="text" :show="status1" @messageCb='messageCb1'/>

    <div class="demo-block-title">
      <span>2秒后消失</span>
    </div>
    <loli-button type="default" tag="button" @click="showIt2">2秒后消失</loli-button>
    <loli-message :text="text" :time="2000" :show="status2" @messageCb='messageCb2'/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: '这是消息框这是消息框这是消息框这是消息框这是消息框这是消息框这是消息框这是消息框这是消息框',
      status1: false,
      status2: false,
    };
  },
  methods: {
    showIt1() {
      this.status1 = true;
    },
    messageCb1(data) {
      this.status1 = false;
    },
    showIt2() {
      this.status2 = true;
    },
    messageCb2(data) {
      this.status2 = false;
    }
  },
};
</script>
<style lang="stylus" scoped>
.loli-button
  margin-bottom: 10px;
</style>


