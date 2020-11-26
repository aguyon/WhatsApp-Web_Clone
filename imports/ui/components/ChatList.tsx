import React from 'react';

import StyledChatList from '../elements/StyledChatList';

import { Chat } from '../../api/models';

import ChatItem from './ChatItem';

interface ChatsListProps {
  chats: Chat[];
  onChatClick: () => void;
  selectedChat: Chat;
}

const ChatList = (props: ChatsListProps): JSX.Element => {
  const renderChats = (): JSX.Element[] => {
    return props.chats
      .sort((a: Chat, b: Chat) => {
        return b.lastMessage.createdAt.getTime() - a.lastMessage.createdAt.getTime();
      })
      .map((chat: Chat) => {
        const active: boolean = props.selectedChat._id === chat._id;
        return (
          <ChatItem
            key={chat._id}
            id={chat._id}
            {...chat}
            onChatClick={props.onChatClick}
            active={active}
          />
        );
      });
  };

  return <StyledChatList>{renderChats()}</StyledChatList>;
};

export default ChatList;
