/**
 * @name
 * @description
 * @usage
 *
 * ==================================================
 * @version 1.0.0
 * @author xuyuanxiang
 * @date 16/5/17
 * ==================================================
 * @version
 * @updator
 * @date
 * @changelog
 *
 * ==================================================
 * ...
 */
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux';

import {logger} from './middlewares';
import reducers from './reducers'
import App from './components/App';
import About from './components/About';

const createStoreWithMiddleware = applyMiddleware(logger, routerMiddleware(browserHistory))(createStore);
const store = createStoreWithMiddleware(reducers);
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}/>
      <Route path="/about" component={About}/>
    </Router>
  </Provider>
  , document.getElementById('heirloom')
);
