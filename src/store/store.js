import { reducer } from '../reducers/reducers.js';
import { createStore } from 'redux';

export const store = createStore(reducer);
