import { ActionTypes, SET_IS_MOBILE, SET_PATH } from './actions';

export interface RootState {
  path: string;
  size: string;
  isMobile: boolean;
}

export const initialState: RootState = {
  path: '',
  size: '25px',
  isMobile: false,
};

const reducer = (state: RootState = initialState, action: ActionTypes) => {
  if (action.type === SET_PATH) {
    return Object.assign({}, state, {
      path: action.path ?? state.path,
      size: action.size ?? state.size,
    });
  }
  if (action.type === SET_IS_MOBILE) {
    return Object.assign({}, state, {
      isMobile: action.isMobile,
    });
  }

  return state;
};

export default reducer;
