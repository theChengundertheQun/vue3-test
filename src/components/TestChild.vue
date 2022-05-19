<template>
  <div class=''>
    child
    {{ state }}
    <button @click="handleChangePhone">change phone</button>
  </div>
</template>
<script>
import { inject } from 'vue';

export default {
  name: 'TextChild',
  components: {},
  data() {
    return {
      
    }
  },
  created() {},
  setup() {
    const state = inject('state');
    const dispatch = inject('dispatch');

    return {
      state,
      dispatch
    };
  },
  methods: {
    handleChangePhone() {
      this.dispatch({
        type: 'changePhone',
        value: '123123123123'
      });
    },
  }
}
</script>
<style lang='scss' scoped>

</style>
