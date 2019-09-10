import { createStore } from 'redux';
import { IAppState } from './IAppState';
import { reducer } from './reducer';

export const store = createStore<IAppState>(reducer);