import React from 'react';

import StyledAvatar from '../elements/StyledAvatar';

interface AvatarProps {
  large?: boolean;
  avatar_url: string;
}

const Avatar: React.FC<AvatarProps> = (props): JSX.Element => {
  return (
    <StyledAvatar>
      <img src={props.avatar_url} alt="avatar" className="avatar--img" />
    </StyledAvatar>
  );
};

export default Avatar;
