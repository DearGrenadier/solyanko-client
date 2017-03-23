import React from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { VisibleOnlyAuthenticated } from 'wrappers/auth';
import logoutUser from './actions';

@connect()
class SignOutLink extends React.Component {
  logout() {
    this.props.dispatch(logoutUser());
  }

  render() {
    return (
      <Menu.Item onClick={ () => this.logout() }>
        Sign Out
      </Menu.Item>
    );
  }
}

export default VisibleOnlyAuthenticated(SignOutLink);

