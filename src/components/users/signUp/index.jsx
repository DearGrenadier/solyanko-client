import React from 'react';
import { connect } from 'react-redux';
import { Grid, Button, Checkbox, Form as FormUI, Icon } from 'semantic-ui-react';
import { Form, Control } from 'react-redux-form';
import { browserHistory } from 'react-router';
import { actions } from 'react-redux-form';

import registerUser from './actions';
import fetchCurrentUser from '../currentUser/actions';

@connect(state => {
  return {
    signUpForm: state.forms.forms.signUp.$form
  };
})
export default class SignUpForm extends React.Component {
  componentWillUnmount() {
    this.props.dispatch(actions.reset('forms.signUp'));
  }

  emailControl(props) {
    return <FormUI.Input { ...props } label='Email' type='email' required={ true } />;
  }

  passwordControl(props) {
    return <FormUI.Input { ...props } required={ true } label='Password' type='password' />;
  }

  passwordConfirmationControl(props) {
    return <FormUI.Input { ...props } required={ true } label='Password Confirmation' type='password' />;
  }

  formControl(props) {
    return <FormUI {...props} />
  }

  async onSubmit(signUpForm) {
    try {
      await this.props.dispatch(registerUser(signUpForm));
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
            <Form model="forms.signUp" component={ this.formControl } onSubmit={ (signUpForm) => this.onSubmit(signUpForm) }>
              <Control model=".email" component={ this.emailControl }/>
              <Control model=".password" component={ this.passwordControl }/>
              <Control model=".password_confirmation" component={ this.passwordConfirmationControl }/>
              <Button type='submit' loading={ this.props.signUpForm.pending }>Submit</Button>
              <Button circular color='facebook' icon='facebook' floated='right' />
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  };
}
