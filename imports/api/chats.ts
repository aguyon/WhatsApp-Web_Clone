import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import moment from 'moment';

import { Chat } from '../api/models';

export const ChatsCollection = new Mongo.Collection<Chat>('Chats');

export const dummyChats: Chat[] = [
  {
    title: '',
    picture: '',
    participants: ['ta9X5odQbeyGrQXx9', '3zGFHjrat2vYQh2EB'],
    lastMessage: {
      content: 'Salut ça va ?',
      createdAt: moment().toDate(),
    },
  },
  {
    title: '',
    picture: '',
    participants: ['sDYdhqsratdGnM2bu', 'ta9X5odQbeyGrQXx9'],
    lastMessage: {
      content: 'Salut comment tu vas ?',
      createdAt: moment().subtract(1, 'days').toDate(),
    },
  },
  {
    title: '',
    picture: '',
    participants: ['SAzzcewDXwHhH8g2E', 'sDYdhqsratdGnM2bu'],
    lastMessage: {
      content: 'Hello !',
      createdAt: moment().subtract(2, 'days').toDate(),
    },
  },
];

if (Meteor.isServer) {
  Meteor.publish('chats.all', function () {
    return ChatsCollection.find();
  });
  Meteor.publish('chats.mine', function () {
    return ChatsCollection.find({
      participants: {
        $in: [this.userId],
      },
    });
  });
}
