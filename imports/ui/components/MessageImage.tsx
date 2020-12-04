import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';

import StyledMessageImage from '../elements/StyledMessageImage';

interface MessageImageProps {
  mine: boolean;
  content: string;
  createdAt: string;
  onImageClick: () => void;
}

const MessageImage = (props: MessageImageProps): JSX.Element => {
  const renderImage = (): JSX.Element => {
    return (
      <>
        <img
          src={props.content}
          alt="img"
          className="image"
          onClick={props.onImageClick}
        />
        <div className="image--overlay">
          <div className="detailsContainer __date">
            <div className="image--date">
              <Moment format="HH:mm">{props.createdAt}</Moment>
            </div>
            {props.mine ? <FontAwesomeIcon icon={faCheckDouble} color="white" /> : null}
          </div>
        </div>
      </>
    );
  };

  return <StyledMessageImage mine={props.mine}>{renderImage()}</StyledMessageImage>;
};

export default MessageImage;
