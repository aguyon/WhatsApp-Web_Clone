import { Meteor } from 'meteor/meteor';

import {
  createDummyChat,
  createDummyUsers,
  createDummyMessages,
} from '../imports/api/helpers';
import { dummyUsers } from '../imports/api/users';
import { ChatsCollection, dummyChats } from '../imports/api/chats';
import { MessagesCollection, dummyMessages } from './../imports/api/messages';

if (Meteor.isServer) {
  Meteor.startup(() => {
    const numberOfUsers: number = Meteor.users.find().count();
    const numberOfChats: number = ChatsCollection.find().count();
    const numberOfMessages: number = MessagesCollection.find().count();

    if (numberOfUsers === 0) {
      console.log("Il n'y a pas d'utilisateurs");
      createDummyUsers(dummyUsers);
    } else {
      console.log('Il y a des utilisateurs');
    }

    if (numberOfChats === 0) {
      console.log("Il n'y a pas de chats");
      createDummyChat(dummyChats);
    } else {
      console.log('Il y a des chats');
    }

    if (numberOfMessages === 0) {
      console.log("Il n'y a pas de messages");
      createDummyMessages(dummyMessages);
    } else {
      console.log('Il y a des messages');
    }
  });
}
