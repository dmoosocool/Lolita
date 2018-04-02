<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  data(){
    return{
      currentValue:this.value
    };
  },
  methods:{
    setActive () {
      const activeKey = this.getActiveKey();
      this.$children.forEach((child, index) => {
        const name = child.name || index.toString();
        let isActive = false;

        if (self.accordion) {
          isActive = activeKey === name;
        } else {
          isActive = activeKey.indexOf(name) > -1;
        }
        child.isActive = isActive;
        child.index = index;
        child.isActive?child.show():child.hide();
      });
    },
    getActiveKey () {
      let activeKey = this.currentValue || [];
      const accordion = this.accordion;
      if (!Array.isArray(activeKey)) {
        activeKey = [activeKey];
      }
      if (accordion && activeKey.length > 1) {
        activeKey = [activeKey[0]];
      }
      for (let i = 0; i < activeKey.length; i++) {
        activeKey[i] = activeKey[i].toString();
      }
      return activeKey;
    },
    toggle:function(data){
      const name = data.name.toString();
      let newActiveKey = [];
      if (this.accordion) {
        if (!data.isActive) {
          newActiveKey.push(name);
        }
      } else {
        let activeKey = this.getActiveKey();
        const nameIndex = activeKey.indexOf(name);
        if (data.isActive) {
          if (nameIndex > -1) {
            activeKey.splice(nameIndex, 1);
          }
        } else {
          if (nameIndex < 0) {
            activeKey.push(name);
          }
        }
        newActiveKey = activeKey;
      }
      this.currentValue = newActiveKey;
      this.$emit('input', newActiveKey);
    }
  },
  props:{
    value:[String,Number,Array],
    accordion: {
      type: Boolean,
      default: false
    },
  },
  mounted:function(){
    this.setActive();
  },
  watch:{
    value:function(val){
      this.currentValue = val;
    },
    currentValue () {
      this.setActive();
    }
  }
};
</script>
<style lang="stylus" scoped>

</style>


