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
    globalThis.localStorage.setItem('borderless-theme', theme);

    return Object.assign({}, state, {
      theme,
    });
  }
  if (action.type === `SET_THEME`) {
    const theme = action.theme;
    globalThis.localStorage.setItem('borderless-theme', theme);

    return Object.assign({}, state, {
      theme,
      isThemeLoaded: true,
    });
  }

  return state;
};

const initialState = {
  path: '',
  size: '25px',
  isMobile: false,
  theme: undefined,
  isThemeLoaded: false,
};

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;
