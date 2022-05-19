import { ref } from 'vue';

const useReducer = (reducer, initialState) => {
  const state = ref(initialState);

  const dispatch = (action) => {
    const res = reducer(state.value, action);
    
    state.value = res;
  };

  return [state, dispatch];
};

export default useReducer;
