import { combineReducers } from 'redux';
import { reducers as commonReducers } from './modules/common';

const reducers = {
  ...commonReducers,
};

type Reducers = typeof reducers;

export type ReduxState = { [K in keyof Reducers]: ReturnType<Reducers[K]> };

export const rootReducers = combineReducers(reducers);
