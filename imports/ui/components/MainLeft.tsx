import React from 'react';
import { Meteor } from 'meteor/meteor';

import StyledMainLeft from '../elements/StyledMainLeft';

import Header from '../components/Header';
import Avatar from '../components/Avatar';
import Status from '../components/Status';
import SearchBar from '../components/SearchBar';
import ChatList from '../components/ChatList';

import { Chat } from '../../api/models';

interface MainLeftProps {
  chats: Chat[];
  onChatClick: (id: string) => void;
  selectedChat: Chat;
}

const MainLeft = (props: MainLeftProps): JSX.Element => {
  const icons: { icon: string }[] = [
    { icon: 'circle-notch' },
    { icon: 'comment-alt' },
    { icon: 'ellipsis-v' },
  ];

  return (
    <StyledMainLeft>
      <Header icons={icons} iconClass="greyIcon">
        <Avatar avatar_url={Meteor.user().profile.picture} />
      </Header>
      <Status />
      <SearchBar />
      <ChatList
        chats={props.chats}
        onChatClick={props.onChatClick}
        selectedChat={props.selectedChat}
      />
    </StyledMainLeft>
  );
};

export default MainLeft;
