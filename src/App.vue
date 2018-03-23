<template>
  <div id="app">
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
//animated slideInLeft
//animated slideOutRight
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
      console.log(this.enterActiveClass, this.leaveActiveClass);
    }
  }
};
</script>

<style lang="stylus">
@import './components/baseStyles/index.styl';

#example {
  padding: 46px 15px 0 15px;
}

#example .demo-block-title {
  padding: 20px 15px 20px 0;
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  color: rgba(69, 90, 100, 0.6);
}
</style>
