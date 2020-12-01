import React from 'react';

import StyledUserItem from '../../elements/StyledUserItem';

import Avatar from '../Avatar';

interface UserItemProps {
  id: string;
  picture: string;
  username: string;
  status: string;
  onUserItemClick: (id: string, username: string, picture: string) => void;
}

const UserItem = (props: UserItemProps): JSX.Element => {
  return (
    <StyledUserItem
      onClick={() => props.onUserItemClick(props.id, props.username, props.picture)}
    >
      <Avatar large avatar_url={props.picture} />
      <div className="chat--contentContainer">
        <div className="content--line1">
          <span className="content--line1__title">{props.username}</span>
        </div>
        <div className="content--line1">
          <span className="content--message">{props.status}</span>
        </div>
      </div>
    </StyledUserItem>
  );
};

export default UserItem;
