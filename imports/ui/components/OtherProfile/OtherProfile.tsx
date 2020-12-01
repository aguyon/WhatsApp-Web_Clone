import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBan, faThumbsDown, faTrash } from '@fortawesome/free-solid-svg-icons';

import { User } from '../../../api/models';
import { findOtherUser } from '../../../api/helpers';

import StyledOtherProfile from '../../elements/StyledOtherProfile';

import Header from '../Header';
import Avatar from '../Avatar';
import Actu from './Actu';
import ActuItem from './ActuItem';

interface OtherProfileProps {
  otherUserId: string;
  onClose: () => void;
}

const OtherProfile = (props: OtherProfileProps): JSX.Element => {
  const otherUser: User = findOtherUser(props.otherUserId);

  return (
    <StyledOtherProfile>
      {otherUser ? (
        <>
          <Header iconClass="greyIcon">
            <div className="OPH--heading">
              <FontAwesomeIcon
                icon={faTimes}
                className="iconOtherProfile"
                onClick={props.onClose}
              />
              <span className="OPH--title">Infos du contact</span>
            </div>
          </Header>
          <div>
            <div className="OP--imageContainer">
              <Avatar big avatar_url={otherUser.profile.picture} />
              <div className="OPIC--textContainer">
                <span className="OPIC--title">{otherUser.username}</span>
                <span className="OPIC--subTitle">en ligne</span>
              </div>
            </div>
            <Actu status={otherUser.profile.status} phone={otherUser.profile.phone} />
            <ActuItem iconName={faBan} content="Bloquer" />
            <ActuItem iconName={faThumbsDown} red content="Signaler le contact" />
            <ActuItem iconName={faTrash} red content="Supprimer la discussion" />
          </div>
        </>
      ) : null}
    </StyledOtherProfile>
  );
};

export default OtherProfile;
