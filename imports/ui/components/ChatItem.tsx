import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';

import StyledChatItem from '../elements/StyledChatItem';

import Avatar from '../components/Avatar';

export interface ChatItemProps {
  id?: string;
  title?: string;
  picture?: string;
  lastMessage?: { content?: string; createdAt?: Date };
  onChatClick?: (id: string) => void;
  active?: boolean;
}

const ChatItem = (props: ChatItemProps): JSX.Element => {
  const { content, createdAt } = props.lastMessage;

  const now: string = moment().format('DD/MM/Y');
  let today: boolean = now === moment(createdAt).format('DD/MM/Y');

  return (
    <StyledChatItem active={props.active} onClick={() => props.onChatClick(props.id)}>
      <Avatar large avatar_url={props.picture} />
      <div className="chat--contentContainer">
        <div className="content--line1">
          <span className="content--line1__title">{props.title}</span>
          <div className="content--line1__date">
            {today ? (
              <Moment format="HH:mm">{createdAt}</Moment>
            ) : (
              <Moment format="DD/MM/Y">{createdAt}</Moment>
            )}
          </div>
        </div>
        <div className="content--line1">
          <span className="content--message">{content}</span>
          <div className="chat--badge">4</div>
        </div>
      </div>
    </StyledChatItem>
  );
};

export default ChatItem;
