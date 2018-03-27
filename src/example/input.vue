<template>
   <div id='example'>
      <loli-header fixed>
        <router-link :to="{path: '/'}" slot="left">返回</router-link>
        <span slot="title">Input - 输入框</span>
      </loli-header>

      <div class="demo-block-title">
        <span>input输入框 - 基础用法</span>
      </div>
      <loli-input v-model="inputBace" placeholder="基础用法"></loli-input>
      <span class="tipcolor">{{inputBace}}</span>

      <div class="demo-block-title">
        <span>input输入框 - 切换type</span>
      </div>
      <loli-input type="password" v-model="inputType" placeholder="切换type"></loli-input>
      <span class="tipcolor">{{inputType}}</span>

      <div class="demo-block-title">
        <span>input输入框 - 禁用状态</span>
      </div>
      <loli-input isDisabled placeholder="禁用状态"></loli-input>
      <div class="demo-block-title">
            <span>input输入框 - 可删除</span>
          </div>
          <loli-input isClearable v-model="inputDelete" placeholder="一键删除"></loli-input>
          <span class="tipcolor">{{inputDelete}}</span>
      </div>
</template>

<script>

export default {
  data() {
    return {
      inputBace:'',
      inputType:'',
      inputDelete:''
    };
  },
  created() {

  },
  methods: {

  }
};
</script>
<style scoped lang="stylus">
  .tipcolor
    color red
    font-size 14px
</style>
