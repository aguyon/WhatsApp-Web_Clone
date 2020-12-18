import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import { User } from './models';
import { ImagesCollection } from './images';

export const dummyUsers: User[] = [
  {
    _id: '0',
    username: 'Ethan Gonzalez',
    password: 'password',
    profile: {
      phone: '0746227490',
      picture: 'https://randomuser.me/api/portraits/men/1.jpg',
      status: `Salut, j'utilise WhatsApp !`,
    },
  },
  {
    _id: '1',
    username: 'Bryan Wallace',
    password: 'password',
    profile: {
      phone: '0632117453',
      picture: 'https://randomuser.me/api/portraits/lego/1.jpg',
      status: `Salut, j'utilise WhatsApp !`,
    },
  },
  {
    _id: '2',
    username: 'Avery Stewart',
    password: 'password',
    profile: {
      phone: '0658743210',
      picture: 'https://randomuser.me/api/portraits/women/4.jpg',
      status: `Salut, j'utilise WhatsApp !`,
    },
  },
  {
    _id: '3',
    username: 'Katie Peterson',
    password: 'password',
    profile: {
      phone: '0698878942',
      picture: 'https://randomuser.me/api/portraits/women/2.jpg',
      status: `Salut, j'utilise WhatsApp !`,
    },
  },
  {
    _id: '4',
    username: 'Ray Edwards',
    password: 'password',
    profile: {
      phone: '0654197450',
      picture: 'https://randomuser.me/api/portraits/men/3.jpg',
      status: `Salut, j'utilise WhatsApp !`,
    },
  },
  {
    _id: '5',
    username: 'Samy Hansen',
    password: 'password',
    profile: {
      phone: '0714389656',
      picture: 'https://randomuser.me/api/portraits/men/4.jpg',
      status: `Salut, j'utilise WhatsApp !`,
    },
  },
  {
    _id: '6',
    username: 'John Smith',
    password: 'password',
    profile: {
      phone: '0632433176',
      picture: 'https://randomuser.me/api/portraits/men/11.jpg',
      status: `Salut, j'utilise WhatsApp !`,
    },
  },
  {
    _id: '7',
    username: 'Adrianna Scott',
    password: 'password',
    profile: {
      phone: '0657290175',
      picture: 'https://randomuser.me/api/portraits/women/3.jpg',
      status: `Salut, j'utilise WhatsApp !`,
    },
  },
  {
    _id: '8',
    username: 'Julienne Bradley',
    password: 'password',
    profile: {
      phone: '0628473894',
      picture: 'https://randomuser.me/api/portraits/women/8.jpg',
      status: `Salut, j'utilise WhatsApp !`,
    },
  },
  {
    _id: '9',
    username: 'Marco Polo',
    password: 'password',
    profile: {
      phone: '0641865783',
      picture: 'https://randomuser.me/api/portraits/men/5.jpg',
      status: `Salut, j'utilise WhatsApp !`,
    },
  },
  {
    _id: '10',
    username: 'Ella Henderson',
    password: 'password',
    profile: {
      phone: '0687165543',
      picture: 'https://randomuser.me/api/portraits/women/29.jpg',
      status: `Salut, j'utilise WhatsApp !`,
    },
  },
  {
    _id: '11',
    username: 'Alexis Guyon',
    password: 'password',
    profile: {
      phone: '0620728430',
      picture: 'https://zupimages.net/up/20/51/8ov5.jpg',
      status: `Développeur de cette application`,
    },
  },
  {
    _id: '10',
    username: 'Brad Gibson',
    password: 'password',
    profile: {
      phone: '0712290765',
      picture: 'https://randomuser.me/api/portraits/men/76.jpg',
      status: `Salut, j'utilise WhatsApp !`,
    },
  },
  {
    _id: '11',
    username: 'Gloria Hill',
    password: 'password',
    profile: {
      phone: '0655198744',
      picture: 'https://randomuser.me/api/portraits/women/11.jpg',
      status: `Salut, j'utilise WhatsApp !`,
    },
  },
  {
    _id: '12',
    username: 'Victor Fields',
    password: 'password',
    profile: {
      phone: '0612854903',
      picture: 'https://randomuser.me/api/portraits/men/81.jpg',
      status: `Salut, j'utilise WhatsApp !`,
    },
  },
  {
    _id: '13',
    username: 'Mary Jacobs',
    password: 'password',
    profile: {
      phone: '0633109845',
      picture: 'https://randomuser.me/api/portraits/women/17.jpg',
      status: `Salut, j'utilise WhatsApp !`,
    },
  },
  {
    _id: '14',
    username: 'Paula Diaz',
    password: 'password',
    profile: {
      phone: '0655932218',
      picture: 'https://randomuser.me/api/portraits/women/25.jpg',
      status: `Salut, j'utilise WhatsApp !`,
    },
  },
  {
    _id: '15',
    username: 'Sue Harrison',
    password: 'password',
    profile: {
      phone: '0643114251',
      picture: 'https://randomuser.me/api/portraits/women/72.jpg',
      status: `Salut, j'utilise WhatsApp !`,
    },
  },
];

if (Meteor.isServer) {
  Meteor.publish('users.all', function () {
    return Meteor.users.find(
      {},
      {
        fields: { services: 0 },
      }
    );
  });
}

Meteor.methods({
  'user.login': function ({ username, phone, password }) {
    let userExist: boolean;
    const user: User = Accounts.findUserByUsername(username);
    userExist = !!user;

    if (userExist) {
      console.log('User exist', user);
      return true;
    } else {
      console.log(`User don't exist.. Account creation !`);
      return Accounts.createUser({
        username,
        password,
        profile: {
          phone,
          status: `Salut, j'utilise WhatsApp !`,
          picture:
            'https://t3.ftcdn.net/jpg/01/09/00/64/240_F_109006426_388PagqielgjFTAMgW59jRaDmPJvSBUL.jpg',
        },
      });
    }
  },

  'user.username': function (id: string, username: string) {
    Accounts.setUsername(id, username);
  },

  'user.picture': function (imageId: string) {
    const Image = ImagesCollection.findOne(imageId);
    const picture: string = Image.link();

    return Meteor.users.update(
      { _id: Meteor.userId() },
      {
        $set: {
          'profile.picture': picture,
        },
      }
    );
  },
});
