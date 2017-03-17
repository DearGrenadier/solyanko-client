import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link, browserHistory } from 'react-router';

class FckWorld extends React.Component {
  render() {
    return (
      <Link to='/'>Hello, Fucking World!</Link>
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
  <Router history={ browserHistory } routes={ routes }/>
);

ReactDOM.render(router, document.getElementById('app'));