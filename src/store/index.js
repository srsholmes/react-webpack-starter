import { createStore, applyMiddleware, compose } from 'redux';
import thunk from '../middleware/thunk';
import createReducer from '../reducers';
import { routerMiddleware } from 'react-router-redux';

export default function configureStore(initialState = {}, history) {

  const middlewares = [
    routerMiddleware(history),
    thunk,
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;
  /* eslint-enable */

  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers),
  );

  store.asyncReducers = {}; // Async reducer registry
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const createReducers = require('../reducers/index').default;
      const nextReducers = createReducers(store.asyncReducers);
      store.replaceReducer(nextReducers);
    });
  }

  return store;
};
