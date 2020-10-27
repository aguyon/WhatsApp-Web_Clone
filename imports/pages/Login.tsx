import React from 'react';
import { Meteor } from 'meteor/meteor';

import RightImg from '../ui/components/RightImg';
import LoginForm from '../ui/components/LoginForm';

const Login = (props: any): JSX.Element => {
  const messageText: string =
    'Connectez vous afin de lancer une conversation\n\nPas de compte ?\nIl sera créer automatiquement une fois les informations remplies';

  const submitLogin = (state: any): void => {
    const { username, password } = state;
    Meteor.call('user.login', state, (err, res) => {
      if (err) {
        console.log('error login', err);
      } else {
        Meteor.loginWithPassword(username, password, (err) => {
          if (err) {
            console.log('error', err);
          } else {
            console.log('result', res);
            props.history.push('/chats');
          }
        });
      }
    });
  };

  return (
    <RightImg messageText={messageText}>
      <LoginForm onLogin={submitLogin} />
    </RightImg>
  );
};

export default Login;
