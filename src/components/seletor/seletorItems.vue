<template>
  <div class="seletor-list">
    <div
      class="ipt-grounp"
      v-for="data in dataList"
      :key=data.code
    >
      <input type="radio" name="lolita-sel" :id="data.name" >
      <label :for="data.name" :data-id="data.code" @click="seletorItemsTap">{{data.name}}</label>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    dataList:{
      type:Array,
      required:true
    }

  },
  methods:{
    seletorItemsTap(e){
      this.$emit('tabs',e);
    }
  }
};
</script>
<style lang="stylus" scoped>
  *
    box-sizing border-box
  .seletor-list
    width: 90%
    margin: 0 auto;
    text-align: center
    min-height: 220px
    max-height: 300px
    overflow-y: scroll
    -webkit-overflow-scrolling: touch;
    padding-bottom: 40px
  .ipt-grounp
    display: block;
    width: 48%
    float: left
    height: 40px
    margin-bottom: 3%
    &:nth-child(odd)
      margin-right 4%
    & input
      display inline
      outline 0
      margin 0
      appearance none
      &:checked
       &+label
        color: #0469c8
        border-color: #0469c8
        background: url(../../assets/selectTrue.png)no-repeat 101% bottom
        background-size: 25px 25px
    & label
      display: inline-block
      font-size: 14px
      font-weight: 700
      width: 100%
      height: 37px
      line-height: 37px
      border: 1px solid #8098a9
      border-radius: 6px
      overflow: hidden
</style>

