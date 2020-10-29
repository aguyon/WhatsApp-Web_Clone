import React from 'react';

import StyledChatList from '../elements/StyledChatList';

import { Chat } from '../../api/models';

import ChatItem from './ChatItem';

const ChatList = (props: any): JSX.Element => {
  const renderChats = (props: any): JSX.Element[] => {
    const { chats } = props;
    return chats.map((chat: Chat) => {
      return <ChatItem key={chat._id} {...chat} />;
    });
  };
  return <StyledChatList>{renderChats(props)}</StyledChatList>;
};

export default ChatList;
