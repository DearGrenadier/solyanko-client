import React from 'react';
import { connect } from 'react-redux';
import { Grid, Button, Form as FormUI, Icon } from 'semantic-ui-react';
import { Form, Control } from 'react-redux-form';
import { browserHistory } from 'react-router';
import { actions } from 'react-redux-form';

import loginUser from './actions';

@connect(state => {
  return {
    signInForm: state.forms.forms.signIn.$form
  };
})
export default class SignInForm extends React.Component {
  componentWillUnmount() {
    this.props.dispatch(actions.reset('forms.signIn'));
  }

  emailControl(props) {
    return <FormUI.Input { ...props } label='Email' type='email' required={ true } />;
  }

  passwordControl(props) {
    return <FormUI.Input { ...props } required={ true } label='Password' type='password' />;
  }

  rememberMeControl(props) {
    return <FormUI.Checkbox { ...props } label='Remember me' />;
  }

  formControl(props) {
    return <FormUI {...props} />
  }

  async onSubmit(signInForm) {
    try {
      await this.props.dispatch(loginUser(signInForm));
      browserHistory.push('/');
    } catch(error) {
      console.log('Unhandled error');
    }
  }

  render() {
    return (
      <Grid centered>
        <Grid.Row columns={ 1 }>
          <Grid.Column width={ 4 }>
            <Form model="forms.signIn" component={ this.formControl }
                  onSubmit={ (signInForm) => this.onSubmit(signInForm) }>
              <Control model=".email" component={ this.emailControl } />
              <Control model=".password" component={ this.passwordControl } />
              <Control.checkbox model=".remember_me" component={ this.rememberMeControl } />
              <Button type='submit' loading={ this.props.signInForm.pending }>Submit</Button>
              <Button circular color='facebook' icon='facebook' floated='right' />
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  };
}
