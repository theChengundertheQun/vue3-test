<template>
  <div class=''>
    father: test: {{ test }} name: {{ name }}
    <ChildComponent v-model="test" v-model:name.reverse="name" />
  </div>
</template>
<script>
import ChildComponent from './Child';

export default {
  name: 'VModelTest',
  components: {
    ChildComponent
  },
  data() {
    return {
      test: '',
      name: '',
    }
  },
  created() {},
  methods: {}
}
</script>
<style lang='scss' scoped>

</style>
