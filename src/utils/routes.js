import Layout from 'containers/layout/index.jsx';
import SignUpForm from 'components/users/signUp/index.jsx';
import SignInForm from 'components/users/signIn/index.jsx';

export default [
  {
    path: '/',
    indexRoute: { component: Layout },
    childRoutes: [
      {
        path: '/sign_up',
        component: SignUpForm  
      },
      {
        path: '/sign_in',
        component: SignInForm  
      }
    ]
  }
];
