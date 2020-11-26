import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';

interface MessageTextProps {
  msgClass: string;
  content: string;
  ownership: string;
  createdAt: string;
}

const MessageText = (props: MessageTextProps): JSX.Element => {
  return (
    <div className="messageContainer">
      <div className={props.msgClass}>
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
