import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

import StyledAvatar from '../elements/StyledAvatar';
import { uploadFile } from '../../api/helpers';

export interface AvatarProps {
  md?: boolean;
  large?: boolean;
  big?: boolean;
  avatar_url?: string;
  inLeftSide?: boolean;
  onAvatarClick?: () => void;
}

const Avatar: React.FC<AvatarProps> = (props): JSX.Element => {
  const [hover, setHover] = React.useState<boolean>(false);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files[0];
    if (file) uploadFile(file, false);
    setHover(false);
  };

  const handleOverlayClick = (): void => {
    const fileInput: HTMLElement = document.getElementById('avatarUpload');
    fileInput.click();
  };

  const renderOverlay = (): JSX.Element => {
    if (props.inLeftSide && hover) {
      return (
        <div
          className="avatar--overlay"
          onMouseLeave={() => setHover(false)}
          onClick={handleOverlayClick}
        >
          <FontAwesomeIcon icon={faCamera} className="overlay--icon" />
          <span className="overlay--text">Changer la photo de profil</span>
        </div>
      );
    }
  };

  return (
    <StyledAvatar md={props.md} large={props.large} big={props.big}>
      <img
        src={props.avatar_url}
        alt="avatar"
        className="avatar--img"
        onClick={props.onAvatarClick}
        onMouseEnter={() => setHover(true)}
      />
      <input id="avatarUpload" type="file" accept="image/*" onChange={onInputChange} />
      {renderOverlay()}
    </StyledAvatar>
  );
};

export default Avatar;
