import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

import { MessageType } from '../../api/models';
import { getBadges, updateBadges } from '../../api/helpers';

import StyledChatItem from '../elements/StyledChatItem';

import Avatar from '../components/Avatar';

export interface ChatItemProps {
  id?: string;
  title?: string;
  picture?: string;
  lastMessage?: { content?: string; type: MessageType; createdAt?: Date };
  participants?: string[];
  onChatClick?: (id: string) => void;
  active?: boolean;
}

const ChatItem = (props: ChatItemProps): JSX.Element => {
  const { content, type, createdAt } = props.lastMessage;

  let badge: number = getBadges(props.id);

  React.useEffect(() => {
    if (props.active) {
      updateBadges(props.participants, props.id);
      badge = getBadges(props.id);
    }
  }, [props.lastMessage]);

  const now: string = moment().format('DD/MM/Y');
  const today: boolean = now === moment(createdAt).format('DD/MM/Y');

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
          {type === 'text' ? (
            <span className="content--message">{content}</span>
          ) : (
            <span className="content--message">
              <FontAwesomeIcon icon={faCamera} style={{ marginRight: '0.5rem' }} />
              Photo
            </span>
          )}
          {badge > 0 ? <div className="chat--badge">{badge}</div> : null}
        </div>
      </div>
    </StyledChatItem>
  );
};

export default ChatItem;
