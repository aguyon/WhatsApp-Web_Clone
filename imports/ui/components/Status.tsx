import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBellSlash } from '@fortawesome/free-solid-svg-icons';

import StyledStatus from '../elements/StyledStatus';
import StyledAvatar from '../elements/StyledAvatar';

const Status = (props: any): JSX.Element => {
  return (
    <StyledStatus color="blue">
      <StyledAvatar>
        <FontAwesomeIcon icon={faBellSlash} size="2x" className="icon--color" />
      </StyledAvatar>
      <div className="status--textContainer">
        <div className="text--big">Etre Averti(e) de nouveaux messages</div>
        <span className="text--small">Afficher les notifications sur le bureau</span>
      </div>
    </StyledStatus>
  );
};

export default Status;
