import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';

import store from 'store/';
import routes from 'utils/routes';
import LoadInitialData from 'containers/loadInitialData/index.jsx';

const app = (
  <Provider store={ store }>
    <LoadInitialData>
      <Router history={ syncHistoryWithStore(browserHistory, store) } routes={ routes } />
    </LoadInitialData>
  </Provider>
);

ReactDOM.render(app, document.getElementById('app'));
