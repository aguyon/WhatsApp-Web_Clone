import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import { User, Chat, Profile, Message } from './models';
import { ChatsCollection } from './chats';
import { MessagesCollection } from './messages';
import { ImagesCollection } from './images';

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

export const createDummyMessages = (messages: Message[]): void => {
  messages.forEach((message) => {
    MessagesCollection.insert(message);
  });
};

export const findChats = (): Chat[] => {
  return ChatsCollection.find()
    .fetch()
    .map((chatCollection) => {
      const otherUserId: string = findOtherId(chatCollection.participants);
      const { username, profile } = findOtherUser(otherUserId);
      const lastMessage: Message = findLastMessage(chatCollection._id);

      return {
        ...chatCollection,
        title: username,
        picture: profile.picture,
        lastMessage: { ...lastMessage },
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

const findLastMessage = (chatId: string): Message => {
  return MessagesCollection.find({ chatId }, { sort: { createdAt: -1 } }).fetch()[0];
};

export const uploadFile = (file: any, isMessage?: boolean): void => {
  const fileUpload = ImagesCollection.insert(
    {
      file,
      streams: 'dynamic',
      chunkSize: 'dynamic',
      allowWebWorkers: true,
    },
    false
  );

  fileUpload.on('start', () => {
    console.log('start');
  });

  fileUpload.on('end', (err, fileObj) => {
    console.log('end', fileObj);
    if (err) {
      console.log('err upload', err);
    } else {
      console.log(fileObj);
      const _id: string = fileObj._id;
      // if (isMessage) {
      Meteor.call('images.url', _id, (err, url: string) => {
        if (err) {
          console.log('err url : ', err);
        } else {
          console.log('url :', url);
          // Session.set('wwc__imageUrl', url)
        }
      });
      // } else {
      //   Meteor.call('user.picture', _id, (err, url) => {
      //     if (err) {
      //       console.log('err url : ', err);
      //     } else {
      //       console.log('url :', url);
      //     }
      //   });
      // }
    }
  });

  fileUpload.on('err', (err, fileObj) => {
    console.log('err', err);
  });

  fileUpload.on('progress', (progress, fileObj) => {
    console.log('progress', progress);
  });

  fileUpload.start();
};
