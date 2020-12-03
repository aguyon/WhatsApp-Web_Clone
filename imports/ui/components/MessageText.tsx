import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';

interface MessageTextProps {
  id: string;
  msgClass: string;
  content: string;
  ownership: string;
  createdAt: string;
  onMessageClick: (messageId: string, type: string) => void;
}

const MessageText = (props: MessageTextProps): JSX.Element => {
  const handleClick = (event: React.MouseEvent, messageId: string, type: string) => {
    const message: any = event.currentTarget;

    if (message.classList.contains('message--mine')) {
      props.onMessageClick(messageId, type);
    } else return;
  };

  return (
    <div className="messageContainer">
      <div className={props.msgClass} onClick={(e) => handleClick(e, props.id, 'TEXT')}>
        <p>{props.content}</p>
        <div className="detailsContainer">
          <span>
            <Moment format="HH:mm">{props.createdAt}</Moment>
          </span>
          {props.ownership === 'mine' ? <FontAwesomeIcon icon={faCheckDouble} /> : null}
        </div>
      </div>
    </div>
  );
};

export default MessageText;
