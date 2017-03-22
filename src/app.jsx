import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './store/';

class FckWorld extends React.Component {
  render() {
    return (
      <span onClick={ browserHistory.goBack }>Hello, Fucking World!</span>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Link to='/fck_world'>Hello, World!</Link>
      </div>
    );
  }
}

const routes = [
  {
    path: '/',
    indexRoute: { component: App },
    childRoutes: [
      {
        path: 'fck_world',
        component: FckWorld
      }
    ]
  }
];

const router = (
  <Router history={ syncHistoryWithStore(browserHistory, store) } routes={ routes }/>
);

ReactDOM.render(<Provider store={ store }>{ router }</Provider>, document.getElementById('app'));
