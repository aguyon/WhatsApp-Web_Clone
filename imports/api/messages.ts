import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import moment from 'moment';

import { Message, MessageType } from './models';

export const MessagesCollection = new Mongo.Collection('Messages');

if (Meteor.isServer) {
  Meteor.publish('messages.all', function () {
    return MessagesCollection.find();
  });
  Meteor.methods({
    'message.insert': function (message) {
      return MessagesCollection.insert(message);
    },
  });
}

export const dummyMessages: Message[] = [
  {
    chatId: 'NhfNDKj7accEAFLDk',
    content: 'Salut ça va ?',
    createdAt: moment().subtract(2, 'days').toDate(),
    type: MessageType.TEXT,
  },
  {
    chatId: 'xFdzxvKh2phEh8BKu',
    content: 'Salut ça va ?',
    createdAt: moment().subtract(2, 'days').toDate(),
    type: MessageType.TEXT,
  },
  {
    chatId: 'NhfNDKj7accEAFLDk',
    content: 'Salut ça va ?',
    createdAt: moment().subtract(2, 'days').toDate(),
    type: MessageType.TEXT,
  },
  {
    chatId: 'xFdzxvKh2phEh8BKu',
    content: 'Salut ça va ?',
    createdAt: moment().subtract(2, 'days').toDate(),
    type: MessageType.TEXT,
  },
  {
    chatId: 'NhfNDKj7accEAFLDk',
    content: 'Salut ça va ?',
    createdAt: moment().subtract(1, 'days').toDate(),
    type: MessageType.TEXT,
  },
  {
    chatId: 'xFdzxvKh2phEh8BKu',
    content: 'Salut ça va ?',
    createdAt: moment().subtract(1, 'days').toDate(),
    type: MessageType.TEXT,
  },
  {
    chatId: 'NhfNDKj7accEAFLDk',
    content: 'Salut ça va ?',
    createdAt: moment().subtract(1, 'days').toDate(),
    type: MessageType.TEXT,
  },
  {
    chatId: 'xFdzxvKh2phEh8BKu',
    content: 'Salut ça va ?',
    createdAt: moment().subtract(1, 'days').toDate(),
    type: MessageType.TEXT,
  },
  {
    chatId: 'NhfNDKj7accEAFLDk',
    content: 'Salut ça va ?',
    createdAt: moment().toDate(),
    type: MessageType.TEXT,
  },
  {
    chatId: 'xFdzxvKh2phEh8BKu',
    content: 'Salut ça va ?',
    createdAt: moment().toDate(),
    type: MessageType.TEXT,
  },
  {
    chatId: 'NhfNDKj7accEAFLDk',
    content: 'Salut ça va ?',
    createdAt: moment().toDate(),
    type: MessageType.TEXT,
  },
  {
    chatId: 'xFdzxvKh2phEh8BKu',
    content: 'Salut ça va ?',
    createdAt: moment().toDate(),
    type: MessageType.TEXT,
  },
  {
    chatId: 'NhfNDKj7accEAFLDk',
    content: 'Salut ça va ?',
    createdAt: moment().toDate(),
    type: MessageType.TEXT,
  },
  {
    chatId: 'xFdzxvKh2phEh8BKu',
    content: 'Salut ça va ?',
    createdAt: moment().toDate(),
    type: MessageType.TEXT,
  },
  {
    chatId: 'NhfNDKj7accEAFLDk',
    content: 'Salut ça va ?',
    createdAt: moment().toDate(),
    type: MessageType.TEXT,
  },
  {
    chatId: 'xFdzxvKh2phEh8BKu',
    content: 'Salut ça va ?',
    createdAt: moment().toDate(),
    type: MessageType.TEXT,
  },
  {
    chatId: 'NhfNDKj7accEAFLDk',
    content: 'Salut ça va ?',
    createdAt: moment().toDate(),
    type: MessageType.TEXT,
  },
  {
    chatId: 'xFdzxvKh2phEh8BKu',
    content: 'Salut ça va ?',
    createdAt: moment().toDate(),
    type: MessageType.TEXT,
  },
];
