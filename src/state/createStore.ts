import { createStore as reduxCreateStore } from 'redux';

import reducer from './reducer';
import { initialState } from './reducer';

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;
