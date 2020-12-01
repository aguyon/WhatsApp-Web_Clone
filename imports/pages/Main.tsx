import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import moment from 'moment';
import _ from 'lodash';
import styled from 'styled-components';

import StyledMain from '../ui/elements/StyledMain';

import MainLeft from '../ui/components/MainLeft';
import MainRight from '../ui/components/MainRight';

import { Chat, MessageType } from '../api/models';
import { findChats } from '../api/helpers';
import { ChatsCollection } from '../api/chats';
import OtherProfile from '../ui/components/OtherProfile/OtherProfile';

interface MainProps {
  // Props withTracker
  loading: boolean;
  chats: Chat[];

  // Props App
  theme: string;
  toggleTheme: () => void;
}

const Main = (props: MainProps) => {
  const [visibleMessage, setVisibleMessage] = React.useState<boolean>(false);
  const [selectedChat, setSelectedChat] = React.useState<Chat>({});
  const [otherProfile, setOtherProfile] = React.useState<any>({});

  const handleChatClick = (id: string): void => {
    if (!visibleMessage) setVisibleMessage(true);

    const newChat: Chat = _.find(props.chats, { _id: id });
    if (newChat) setSelectedChat(newChat);
    else {
      const newChat: Chat = ChatsCollection.findOne(id);
      setSelectedChat(newChat);
    }
  };

  const handleAvatarClick = (otherId: string): void => {
    setOtherProfile({ visible: true, otherId });
  };

  const handleCloseOtherProfile = (): void => {
    setOtherProfile({ visible: false, otherId: '' });
  };

  const handleUserItemClick = (
    otherUserId: string,
    username: string,
    picture: string
  ): void => {
    const chat: Chat = ChatsCollection.findOne({
      participants: {
        $all: [otherUserId, Meteor.userId()],
      },
    });

    if (chat) {
      handleChatClick(chat._id);
    } else {
      const chatId: string = ChatsCollection.insert({
        title: username,
        picture,
        participants: [otherUserId, Meteor.userId()],
        lastMessage: {
          content: '',
          createdAt: moment().toDate(),
          type: MessageType.TEXT,
        },
      });

      handleChatClick(chatId);
    }
  };

  return (
    <StyledMainContainer>
      <StyledMain>
        {!props.loading ? (
          <React.Fragment>
            {/* <button onClick={props.toggleTheme}>Changer thème</button> */}
            <MainLeft
              chats={props.chats}
              onChatClick={handleChatClick}
              selectedChat={selectedChat}
              onUserItemClick={handleUserItemClick}
            />
            <MainRight
              theme={props.theme}
              right
              visibleMessage={visibleMessage}
              selectedChat={selectedChat}
              onAvatarClick={handleAvatarClick}
            />
            {otherProfile.visible ? (
              <OtherProfile
                otherUserId={otherProfile.otherId}
                onClose={handleCloseOtherProfile}
              />
            ) : null}
          </React.Fragment>
        ) : null}
      </StyledMain>
      <StyledMainHeaderColor />
    </StyledMainContainer>
  );
};

const StyledMainContainer = styled.div`
  background-color: ${({ theme }) => theme.main.color.background};
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 100;
  overflow: hidden;
`;

const StyledMainHeaderColor = styled.div`
  background-color: ${({ theme }) => theme.main.color.header};
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 127px;
  z-index: 1;
`;

export default withTracker(() => {
  const chatsReady: boolean = Meteor.subscribe('chats.mine').ready();
  const messagesReady: boolean = Meteor.subscribe('messages.all').ready();

  return {
    loading: chatsReady && messagesReady ? false : true,
    chats: findChats(),
  };
})(Main);
