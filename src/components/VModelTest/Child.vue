<template>
  <div class=''>
    child modelValue: {{ modelValue }}
    <input @input="handleChangeValue($event.target.value)" />
    child name: {{ name }}
    <input @input="handleChangeName($event.target.value)" />
  </div>
</template>
<script>
export default {
  name: 'ChildComponent',
  components: {},
  data() {
    return {
      
    }
  },
  // props: {
  //   modelValue: String,
  //   name: String,
  //   nameModifiers: {
  //     default: () => ({})
  //   }
  // },
  props: ['modelValue', 'name', 'nameModifiers'],
  created() {},
  methods: {
    handleChangeValue(val) {
      this.$emit('update:modelValue', val);
    },
    handleChangeName(val) {
      let value = val;
      
      if (this.nameModifiers?.reverse) {
        value = value.split('').reverse().join('');
      }

      this.$emit('update:name', value);
    },
  }
}
</script>
<style lang='scss' scoped>

</style>
