import React, { ReactNode } from 'react';
import styled from 'styled-components';

import StyledRightImg from '../elements/StyledRightImg';

interface RightImgProps {
  theme?: string;
  messageText: string;
  right?: boolean;
  border?: boolean;
}

const RightImg: React.FC<RightImgProps> = (props): JSX.Element => {
  return (
    <StyledRightImg right={props.right} border={props.border}>
      <StyledContent>
        <img
          alt="background"
          className="rightImg--image"
          src={
            props.theme === 'light'
              ? './images/whatsapp-bg-light.jpg'
              : './images/whatsapp-bg-dark.jpg'
          }
        />
        <h3 className="rightImg--title">Gardez votre téléphone connecté</h3>
        <div className="rightImg--div">
          <p className="rightImg--p">{props.messageText}</p>
          <div className="rightImg--divider" />
        </div>
      </StyledContent>
      {props.children}
    </StyledRightImg>
  );
};

const StyledContent = styled.div`
  text-align: center;
  width: 80%;
  max-width: 460px;
`;

export default RightImg;
