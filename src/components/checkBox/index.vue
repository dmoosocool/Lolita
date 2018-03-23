<template>
   <div class='loli-checkbox-group'>
      <slot></slot>
  </div>
 
</template>
  
<script>

export default {
  name:'loli-checkBox-group',
  props:{
    value: {
      type: Array,
      default () {
        return [];
      }
    },
  },
  data() {
    return {
      currentValue:this.value,
      childrens:[]
    };
  },
  mounted(){
    this.updateModel(true);
  },
  methods: {
    updateModel(update){
      if(this.$children){
        const {value} = this;
        this.$children.forEach(child=>{
          child.model = value;
          if(update){
            child.currentValue = value.indexOf(child.label) >= 0;
            child.group = true;
          }
        });
      }
    },
    change (data) {
      this.currentValue = data;
      this.$emit('input', data);
      this.$emit('on-change', data);
    },
   
  },
  watch: {
    value () {
      this.updateModel(true);
    }
  }
};
</script>

<style scoped lang="stylus">
  
</style>