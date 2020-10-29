import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';

import StyledChatItem from '../elements/StyledChatItem';

import Avatar from '../components/Avatar';

const ChatItem = (props: any): JSX.Element => {
  const { title, picture, lastMessage } = props;
  const { content, createdAt } = lastMessage;
  const now: string = moment().format('DD/MM/Y');
  let today: boolean = now === moment(createdAt).format('DD/MM/Y');

  return (
    <StyledChatItem>
      <Avatar large avatar_url={picture} />
      <div className="chat--contentContainer">
        <div className="content--line1">
          <span className="content--line1__title">{title}</span>
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
