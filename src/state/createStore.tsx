import { createStore as reduxCreateStore } from 'redux';

const reducer = (state: any, action: any) => {
  if (action.type === `SET_PATH`) {
    return Object.assign({}, state, {
      path: action.path || state.path,
      size: action.size || state.size,
    });
  }
  return state;
};

const initialState = { path: '', size: '25px' };

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;
