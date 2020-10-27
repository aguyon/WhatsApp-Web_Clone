import React from 'react';

import StyledRightImg from '../elements/StyledRightImg';

interface RightImgProps {
  messageText: string;
  right?: boolean;
  children?: JSX.Element;
}

const RightImg = (props: RightImgProps): JSX.Element => {
  return (
    <StyledRightImg right={props.right}>
      <img
        alt="background"
        className="rightImg--image"
        src="./images/whatsapp-bg-1.jpg"
      />
      <h3 className="rightImg--title">Gardez votre téléphone connecté</h3>
      <div className="rightImg--div">
        <p className="rightImg--p">{props.messageText}</p>
        <div className="rightImg--divider" />
      </div>
      {props.children}
    </StyledRightImg>
  );
};

export default RightImg;
