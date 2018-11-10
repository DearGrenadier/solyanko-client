export const Api = {
  users: {
    signUp: 'v1/users.json',
    signIn: 'v1/users/sign_in.json',
    signOut: 'v1/users/sign_out.json',
    currentUser: 'v1/current_user.json'
  }
};

export const buildUrl = (resource, action) => resource.find(route => route.actions.includes(action)).url;

export default Api;
