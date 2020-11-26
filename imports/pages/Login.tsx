import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

import RightImg from '../ui/components/RightImg';
import LoginForm from '../ui/components/LoginForm';

const Login: React.FC<RouteComponentProps> = (props): JSX.Element => {
  const messageText: string =
    'Connectez vous afin de lancer une conversation\n\nPas de compte ?\nIl sera créer automatiquement une fois les informations remplies';

  const submitLogin = (state: any): void => {
    console.log(state);
    Meteor.call('user.login', state, (err, res) => {
      if (err) {
        console.log('error login', err);
      } else {
        Meteor.loginWithPassword(state.username, state.password, (err) => {
          if (err) {
            console.log('error', err);
          } else {
            console.log('result', res);
            props.history.push('/');
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
