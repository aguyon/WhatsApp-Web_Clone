import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import StyledMain from '../ui/elements/StyledMain';

import MainLeft from '../ui/components/MainLeft';
import MainRight from '../ui/components/MainRight';

import { ChatsCollection } from '../api/chats';
import { findChats } from '../api/helpers';

const Main = (props: any): JSX.Element => {
  Tracker.autorun(() => {
    Meteor.subscribe('chats.mine');
    console.log('chats', findChats());
  });

  return (
    <StyledMain>
      <MainLeft chats={findChats()} />
      <MainRight right />
    </StyledMain>
  );
};

export default Main;
