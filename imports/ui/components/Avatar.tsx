import React from 'react';

import StyledAvatar from '../elements/StyledAvatar';

interface AvatarProps {
  avatar_url: string;
}

const Avatar = (props: AvatarProps): JSX.Element => {
  return (
    <StyledAvatar>
      <img src={props.avatar_url} alt="avatar" className="avatar--img" />
    </StyledAvatar>
  );
};

export default Avatar;
