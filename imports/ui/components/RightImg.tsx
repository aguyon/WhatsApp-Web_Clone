import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ThemeContext } from '../../context/ThemeContext';

import StyledRightImg from '../elements/StyledRightImg';
interface RightImgProps {
  messageText: string;
  right?: boolean;
  border?: boolean;
}

const RightImg: React.FC<RightImgProps> = (props): JSX.Element => {
  const { themeMode } = React.useContext(ThemeContext);

  return (
    <StyledRightImg right={props.right} border={props.border}>
      <StyledContent>
        <img
          alt="background"
          className="rightImg--image"
          src={
            themeMode === 'light'
              ? './images/whatsapp-light.jpg'
              : './images/whatsapp-dark.jpg'
          }
        />
        <h3 className="rightImg--title">Gardez votre téléphone connecté</h3>
        <div className="rightImg--div">
          <p className="rightImg--primary-text">{props.messageText}</p>
          <div className="rightImg--divider" />
          {props.right ? (
            <p className="rightImg--secondary-text">
              Ceci est une clone de l'application Web{' '}
              <Link
                to="https://web.whatsapp.com/"
                target="_blank"
                className="rightImg--link"
                onClick={(event) => {
                  event.preventDefault();
                  window.open('https://web.whatsapp.com/');
                }}
              >
                WhatsApp
              </Link>
              .{'\n'}Votre téléphone n'est pas nécessaire pour utiliser l'application.
            </p>
          ) : null}
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
