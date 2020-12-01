import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface HeaderProfileProps {
  onProfileClose: () => void;
}

const HeaderProfile = (props: HeaderProfileProps): JSX.Element => {
  return (
    <div className="profile--header">
      <div className="profile--header__line">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="profile--header__icon"
          onClick={props.onProfileClose}
        />
        <span>Profil</span>
      </div>
    </div>
  );
};

export default HeaderProfile;
