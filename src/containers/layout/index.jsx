import React from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import SignOutLink from 'components/users/signOut/link.jsx'
import SignInLink from 'components/users/signIn/link.jsx'
import SignUpLink from 'components/users/signUp/link.jsx'

@connect(state => {
  return {
    currentUser: state.currentUser
  };
})
export default class Layout extends React.Component {
  render() {
    const user = this.props.currentUser;
    return (
      <Menu>
        <Menu.Menu position='right'>
          { user.data && user.data.id }
          <SignUpLink />
          <SignInLink />
          <SignOutLink />
        </Menu.Menu>
      </Menu>
    )
  }
}

