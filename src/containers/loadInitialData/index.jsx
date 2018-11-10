import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { fetchCurrentUser } from 'components/users/currentUser/actions';

@connect(state => {
  return {
    currentUser: state.currentUser
  }
})
export default class LoadInitialData extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchCurrentUser())
  }

  get isLoading() {
    return this.props.currentUser.loading;
  }

  get loader() {
    return (
      <Dimmer active inverted>
        <Loader />
      </Dimmer>
    );
  }

  render() {
    return this.isLoading ? this.loader : this.props.children;
  }
}
