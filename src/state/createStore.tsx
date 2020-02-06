import { createStore as reduxCreateStore } from 'redux';

const reducer = (state: any, action: any) => {
  if (action.type === `SET_PATH`) {
    return Object.assign({}, state, {
      path: action.path || state.path,
      size: action.size || state.size,
    });
  }
  if (action.type === `SET_IS_MOBILE`) {
    return Object.assign({}, state, {
      isMobile: action.isMobile,
    });
  }
  if (action.type === `TOGGLE_THEME`) {
    const theme = state.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('borderless-theme', theme);

    return Object.assign({}, state, {
      theme,
    });
  }

  return state;
};

const mode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const theme = localStorage.getItem('borderless-theme') ?? mode;

const initialState = { path: '', size: '25px', isMobile: false, theme };

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;
