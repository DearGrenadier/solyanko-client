import React from 'react';
import { Menu } from 'semantic-ui-react';
import { VisibleOnlyNotAuthenticated } from 'wrappers/auth';
import { browserHistory } from 'react-router';

class SignInLink extends React.Component {
  render() {
    return (
      <Menu.Item onClick={ () => browserHistory.push('sign_in') }>
        Sign In
      </Menu.Item>
    );
  }
}

export default VisibleOnlyNotAuthenticated(SignInLink);

