import { ref } from 'vue';

const useReducer = (reducer, initialState) => {
  const state = ref(initialState);
  const action = {};

  const dispatch = ({ type, value }) => {
    action.type = type;
    action.value = value;
    const res = reducer(state.value, action);
    
    state.value = res;
  };

  return [state, dispatch];
};

export default useReducer;
