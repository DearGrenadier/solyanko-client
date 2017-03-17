import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
      <Router>
        <div>
          <Route exact path="/" component={ App }/>
          <Route exact path="/fck_world" component={ FckWorld }/>
          <Link to='/fck_world'>Hello, World!</Link>
        </div>
      </Router>
    );
  }
}


ReactDOM.render(<App/>, document.getElementById('app'));