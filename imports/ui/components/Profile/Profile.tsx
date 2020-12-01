import React, { ReactNode } from 'react';

import StyledProfile from '../../elements/StyledProfile';

interface ProfileProps {
  children: ReactNode;
}

const Profile = (props: ProfileProps): JSX.Element => {
  return (
    <StyledProfile>
      {props.children}
      <div />
    </StyledProfile>
  );
};

export default Profile;
