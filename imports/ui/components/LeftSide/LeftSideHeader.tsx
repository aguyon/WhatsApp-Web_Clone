import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface LeftSideHeaderProps {
  title: string;
  onLeftSideHeaderClose: () => void;
}

const LeftSideHeader = (props: LeftSideHeaderProps): JSX.Element => {
  return (
    <div className="LS--header">
      <div className="LS--header__line">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="LS--header__icon"
          onClick={props.onLeftSideHeaderClose}
        />
        <span>{props.title}</span>
      </div>
    </div>
  );
};

export default LeftSideHeader;
