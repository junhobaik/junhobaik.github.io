export const SET_IS_MOBILE = 'SET_IS_MOBILE';
export const SET_PATH = 'SET_PATH';

interface SetIsMobileAction {
  type: typeof SET_IS_MOBILE;
  isMobile: boolean;
}

interface SetPathAction {
  type: typeof SET_PATH;
  path: string;
  size?: string;
}

export type ActionTypes = SetIsMobileAction | SetPathAction;

const setIsMobile = (isMobile: boolean) => {
  return { type: SET_IS_MOBILE, isMobile };
};

const setPath = (path: string, size?: string) => {
  return { type: SET_PATH, path, size };
};

export const actionCreators = {
  setIsMobile,
  setPath,
};
