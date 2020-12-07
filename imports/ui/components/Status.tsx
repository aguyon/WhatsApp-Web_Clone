import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBellSlash } from '@fortawesome/free-solid-svg-icons';

import StyledStatus from '../elements/StyledStatus';
import StyledAvatar from '../elements/StyledAvatar';

const Status: React.FC = (props): JSX.Element => {
  return (
    <StyledStatus>
      <StyledAvatar>
        <FontAwesomeIcon icon={faBellSlash} size="2x" className="icon--color" />
      </StyledAvatar>
      <div
        className="status--textContainer"
        onClick={() => Notification.requestPermission()}
      >
        <div className="text--big">Être averti(e) des nouveaux messages</div>
        <span className="text--small">Activer les notifications sur le bureau</span>
      </div>
    </StyledStatus>
  );
};

export default Status;
