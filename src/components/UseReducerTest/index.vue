<template>
  <div class='test'>
    father
    {{ state }}
    <input @change="(e) => dispatch({ type: 'changeName', value: e.target.value })" />
    <Child />
  </div>
</template>
<script>
import { useReducer } from '@/utils';
import Child from './Child';
import { provide } from 'vue';

export default {
  name: 'TestComponent',
  components: {
    Child
  },
  data() {
    return {
      
    }
  },
  setup() {
    const reducer = (state, action) => {
      const { type, value } = action;
      switch(type) {
        case 'changeName':
          return {
            ...state,
            name: value
          };
        case 'changePhone':
          return {
            ...state,
            phone: value
          };
        case 'changeUser':
          return {
            ...state,
            user: value
          };
        default:
          return state;
      }
    };
    const initialState = {
      name: '',
      phone: '18777777777',
      user: {
        name: 'admin',
        age: 18
      }
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    
    provide('state', state);
    provide('dispatch', dispatch);
    
    return {
      state,
      dispatch
    };
  },
  methods: {}
}
</script>
<style lang='scss' scoped>

</style>
