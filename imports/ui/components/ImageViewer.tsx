import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import StyledImageViewer from '../elements/StyledImageViewer';

import Avatar from './Avatar';

interface ImageViewerProps {
  imageUrl: string;
  username: string;
  onClose: () => void;
}

const ImageViewer = (props: ImageViewerProps): JSX.Element => {
  return (
    <StyledImageViewer>
      <div className="IV--infos">
        <Avatar avatar_url={props.imageUrl} />
        <span>{props.username}</span>
        <FontAwesomeIcon icon={faTimes} className="IV--icon" onClick={props.onClose} />
      </div>
      <div className="IV--imageContainer">
        <img src={props.imageUrl} alt="image" className="IV--image" />
      </div>
    </StyledImageViewer>
  );
};

export default ImageViewer;
