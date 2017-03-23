import React from 'react';
import { Menu } from 'semantic-ui-react';
import { VisibleOnlyNotAuthenticated } from 'wrappers/auth';
import { browserHistory } from 'react-router';

class SignUpLink extends React.Component {
  render() {
    return (
      <Menu.Item onClick={ () => browserHistory.push('sign_up') }>
        Sign Up
      </Menu.Item>
    );
  }
}

export default VisibleOnlyNotAuthenticated(SignUpLink);

