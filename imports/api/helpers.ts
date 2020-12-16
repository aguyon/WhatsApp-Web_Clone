import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import { User, Chat, Profile } from './models';
import { ChatsCollection } from './chats';

export const createDummyUsers = (users: User[]): void => {
  users.forEach((user) => {
    const { username, profile, password } = user;
    Accounts.createUser({
      username,
      password,
      profile,
    });
  });
};

export const createDummyChat = (chats: Chat[]): void => {
  chats.forEach((chat) => {
    ChatsCollection.insert(chat);
  });
};

export const findChats = (): Chat[] => {
  return ChatsCollection.find()
    .fetch()
    .map((chatCollection) => {
      const otherUserId: string = findOtherId(chatCollection.participants);
      const { username, profile } = findOtherUser(otherUserId);
      return {
        ...chatCollection,
        title: username,
        picture: profile.picture,
      };
    });
};

const findOtherId = (participants: string[]): string => {
  const myId: string = Meteor.userId();
  let otherUserId: string;

  if (myId === participants[0]) {
    otherUserId = participants[1];
  } else {
    otherUserId = participants[0];
  }

  return otherUserId;
};

const findOtherUser = (_id: string): User => {
  return Meteor.users.findOne({ _id });
};
