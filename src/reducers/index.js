import { combineReducers } from 'redux';
import sortReducers from '../utils/sortReducers';
import hello from './hello';
import routeReducer from './route';

const reducers = {
  hello,
  routeReducer,
};

export default function createReducer(asyncReducers) {
  return combineReducers({
    ...sortReducers(reducers),
    ...asyncReducers,
  });
}
