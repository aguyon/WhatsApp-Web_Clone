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
}

const MainLeft = (props: MainLeftProps): JSX.Element => {
  const { chats } = props;
  return (
    <StyledMainLeft>
      <Header
        icons={[
          { icon: 'circle-notch' },
          { icon: 'comment-alt' },
          { icon: 'ellipsis-v' },
        ]}
        iconClass="greyIcon"
      >
        <Avatar avatar_url={Meteor.user().profile.picture} />
      </Header>
      <Status />
      <SearchBar />
      <ChatList chats={chats} />
    </StyledMainLeft>
  );
};

export default MainLeft;
