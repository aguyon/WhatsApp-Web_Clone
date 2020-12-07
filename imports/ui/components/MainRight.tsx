import React from 'react';

import StyledMainRight from '../elements/StyledMainRight';

import RightImg from '../components/RightImg';
import MessageView from './MessageView';

import { Chat } from '../../api/models';

interface MainRightProps {
  theme: string;
  right: boolean;
  border: boolean;
  visibleMessage: boolean;
  selectedChat: Chat;
  onAvatarClick: (otherId: string) => void;
  onMessageClick: (messageId: string, type: string) => void;
}

const MainRight = (props: MainRightProps): JSX.Element => {
  const messageText: string = `WhatsApp se connecte à votre téléphone pour synchroniser les messages. Pour réduire l'utilisation des données, connectez votre téléphone à un réseau WI-FI.`;

  return (
    <StyledMainRight>
      {props.visibleMessage ? (
        <MessageView
          selectedChat={props.selectedChat}
          onAvatarClick={props.onAvatarClick}
          onMessageClick={props.onMessageClick}
        />
      ) : (
        <RightImg
          theme={props.theme}
          right={props.right}
          border={props.border}
          messageText={messageText}
        />
      )}
    </StyledMainRight>
  );
};

export default MainRight;
