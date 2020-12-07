import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';
import moment from 'moment';
import _ from 'lodash';
import styled from 'styled-components';

import { Chat, MessageType } from '../api/models';
import { findChats } from '../api/helpers';
import { ChatsCollection } from '../api/chats';

import StyledMain from '../ui/elements/StyledMain';

import MainLeft from '../ui/components/MainLeft';
import MainRight from '../ui/components/MainRight';
import OtherProfile from '../ui/components/OtherProfile/OtherProfile';
import BigOverlay from '../ui/components/BigOverlay';
import ImageViewer from '../ui/components/ImageViewer';
import Popup from '../ui/components/Popup';

interface MainProps {
  // Props withTracker
  loading: boolean;
  chats: Chat[];

  // Props App
  theme: string;
  toggleTheme: () => void;
}

const initialBigOverlay = {
  image: {
    visible: false,
    url: '',
    username: '',
  },
  popup: {
    visible: false,
    title: '',
  },
};

const Main = (props: MainProps) => {
  const [visibleMessage, setVisibleMessage] = React.useState<boolean>(false);
  const [visibleBigOverlay, setVisibleBigOverlay] = React.useState<any>(
    initialBigOverlay
  );
  const [selectedChat, setSelectedChat] = React.useState<Chat>({});
  const [otherProfile, setOtherProfile] = React.useState<any>({});

  const handleChatClick = (id: string): void => {
    if (!visibleMessage) {
      setVisibleMessage(true);
    }

    const chat: Chat = _.find(props.chats, { _id: id });
    if (chat) setSelectedChat(chat);
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

  const handleMessageClick = (messageId: string, type: string): void => {
    Session.set('wc--message__id', messageId);
    setVisibleBigOverlay((prevState) => {
      return {
        ...prevState,
        popup: {
          visible: true,
          title: type === 'TEXT' ? 'Supprimer le message ?' : `Supprimer l'image ?`,
        },
      };
    });
  };

  const handleDeleteMessage = (): void => {
    const messageId: string = Session.get('wc--message__id');
    Meteor.call('message.delete', messageId, (err, res) => {
      if (err) console.log('err delete message', err);
      else handleCloseBigOverlay();
    });
  };

  const showImage = (imageUrl: string, username: string): void => {
    setVisibleBigOverlay((prevState) => {
      return {
        ...prevState,
        image: {
          visible: true,
          url: imageUrl,
          username,
        },
      };
    });
  };

  const handleCloseBigOverlay = (): void => {
    setVisibleBigOverlay(() => {
      return {
        image: {
          visible: false,
          url: '',
          username: '',
        },
        popup: {
          visible: false,
          title: '',
        },
      };
    });
  };

  const handleDeleteChat = (): void => {
    Meteor.call('chat.delete', selectedChat._id);
    setVisibleMessage(false);
    setOtherProfile({ visible: false, otherId: '' });
  };

  return (
    <StyledMainContainer>
      <StyledMain>
        {!props.loading ? (
          <React.Fragment>
            <MainLeft
              toggleTheme={props.toggleTheme}
              chats={props.chats}
              onChatClick={handleChatClick}
              selectedChat={selectedChat}
              onUserItemClick={handleUserItemClick}
            />

            <MainRight
              theme={props.theme}
              right
              border
              visibleMessage={visibleMessage}
              selectedChat={selectedChat}
              onAvatarClick={handleAvatarClick}
              onMessageClick={handleMessageClick}
            />

            {visibleBigOverlay.popup.visible ? (
              <BigOverlay>
                <Popup
                  title={visibleBigOverlay.popup.title}
                  onCancel={handleCloseBigOverlay}
                  onConfirm={handleDeleteMessage}
                />
              </BigOverlay>
            ) : null}

            {visibleBigOverlay.image.visible ? (
              <BigOverlay avatarBigOverlay>
                <ImageViewer
                  imageUrl={visibleBigOverlay.image.url}
                  username={visibleBigOverlay.image.username}
                  onClose={handleCloseBigOverlay}
                />
              </BigOverlay>
            ) : null}

            {otherProfile.visible ? (
              <OtherProfile
                otherUserId={otherProfile.otherId}
                onClose={handleCloseOtherProfile}
                onShowImage={showImage}
                onDeleteChat={handleDeleteChat}
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
  background-color: ${({ theme }) => theme.color.app_background_secondary};
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 100;
  overflow: hidden;
`;

const StyledMainHeaderColor = styled.div`
  background-color: ${({ theme }) => theme.color.app_background_primary};
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 132px;
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
