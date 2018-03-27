<template>
  <div id="app">
    <div class="hideTop">
      <p> 你好啊, Lolita ~ ❤️ </p>
    </div>
    <transition
      mode="out-in"
      :duration="{enter: 100, leave: 100}"
      :enter-active-class="enterActiveClass"
      :leave-active-class="leaveActiveClass"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import animate from 'animate.css';
export default {
  name: 'App',
  data(){
    return {
      enterActiveClass: '',
      leaveActiveClass: ''
    };
  },

  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
      this.enterActiveClass = toDepth < fromDepth ? 'animated slideInLeft' : 'animated slideInRight';
      this.leaveActiveClass = toDepth < fromDepth ? 'animated slideOutRight' : 'animated slideOutLeft';
    }
  }
};
</script>

<style lang="stylus">
@import './components/baseStyles/index.styl';
.hideTop
  position fixed
  height 100%
  width 100%
  background rgba(105,192,255,.97)
  z-index 3
  top -100%
  transition top 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);
  p
    color #fff
    font-size 14px
    position absolute
    width 100%
    text-align center
    bottom 20px

#example
  min-height 667px
  padding 46px 15px 0 15px

#example .demo-block-title
  padding 20px 15px 20px 0
  margin 0
  font-weight 400
  font-size 14px
  color rgba(69, 90, 100, 0.6)
</style>
