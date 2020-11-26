import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import _ from 'lodash';
import styled from 'styled-components';

import StyledMain from '../ui/elements/StyledMain';

import MainLeft from '../ui/components/MainLeft';
import MainRight from '../ui/components/MainRight';

import { Chat } from '../api/models';
import { findChats } from '../api/helpers';
import { ChatsCollection } from '../api/chats';

interface MainProps {
  // Props withTracker
  loading: boolean;
  chats: Chat[];

  // Props App
  theme: string;
  toggleTheme: () => void;
}

const Main = (props: MainProps) => {
  // const [loading, setLoading] = React.useState<boolean>(true);

  // Tracker.autorun(() => {
  //   const chatsReady: boolean = Meteor.subscribe('chats.mine').ready();
  //   const messagesReady: boolean = Meteor.subscribe('messages.all').ready();

  //   if (chatsReady && messagesReady) setLoading(false);
  // });

  const [visibleMessage, setVisibleMessage] = React.useState<boolean>(false);
  const [selectedChat, setSelectedChat] = React.useState<Chat>({});

  const handleChatClick = (id: string): void => {
    if (!visibleMessage) setVisibleMessage(true);

    const newChat: Chat = _.find(props.chats, { _id: id });
    setSelectedChat(newChat);
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
            />
            <MainRight
              theme={props.theme}
              right
              visibleMessage={visibleMessage}
              selectedChat={selectedChat}
            />
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
  height: 120px;
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
