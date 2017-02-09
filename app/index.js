import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import {Provider} from 'react-redux';
import Dashboard from './containers/Dashboard';
import ProductDetail from './containers/ProductDetail';
import configureStore from './store/configureStore';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import App from './containers/App';

const store = configureStore();

const routes = (
 <Route path="/" component={App} >
   <IndexRoute component={Dashboard}/>
   <Route path="item/:id" component={ProductDetail}/>
 </Route>
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app')
);
