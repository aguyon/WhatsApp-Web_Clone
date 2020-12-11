import React from 'react';

import Avatar from '../Avatar';
import Form from './Form';

interface ProfileProps {
  picture: string;
}

const Profile = (props: ProfileProps) => {
  return (
    <React.Fragment>
      <div className="LS--avatar">
        <Avatar big inLeftSide avatar_url={props.picture} />
      </div>
      <Form type="username" />
      <div className="LS--desc">
        <span>
          Ce n'est pas votre nom d'utilisateur ou code pin. Ce nom sera visible auprès de
          vos contacts WhatsApp.
        </span>
      </div>
      <Form type="actu" />
    </React.Fragment>
  );
};

export default Profile;
