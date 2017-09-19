import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
// TODO: Add in routing with state history
//import { syncHistoryWithStore } from 'react-router-redux';
//import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import configureStore from './store';
const store = configureStore({});

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component/>
      </AppContainer>
    </Provider>,
    document.getElementById('root'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(App);
  });
}
