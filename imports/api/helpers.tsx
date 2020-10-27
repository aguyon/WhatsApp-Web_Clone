import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import { User } from './models';

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
