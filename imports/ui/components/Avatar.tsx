import React from 'react';

import StyledAvatar from '../elements/StyledAvatar';

interface AvatarProps {
  large?: boolean;
  big?: boolean;
  avatar_url: string;
  onAvatarClick?: () => void;
}

const Avatar: React.FC<AvatarProps> = (props): JSX.Element => {
  return (
    <StyledAvatar big={props.big}>
      <img
        src={props.avatar_url}
        alt="avatar"
        className="avatar--img"
        onClick={props.onAvatarClick}
      />
    </StyledAvatar>
  );
};

export default Avatar;
