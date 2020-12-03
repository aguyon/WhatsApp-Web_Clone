import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import _, { Dictionary } from 'lodash';

import { User } from '../../../api/models';

import StyledUsersList from '../../elements/StyledUsersList';
import { Meteor } from 'meteor/meteor';
import UserItem from './UserItem';

interface UsersListProps {
  // Props withTracker
  users: User[];

  // Props MainLeft
  onUserItemClick: () => void;
  searchedValue: string;
  searchedUsers: User[];
}

interface Users {
  letter: string;
  groupedUsers: User[];
}

const UsersList = (props: UsersListProps): JSX.Element => {
  const groupedUsers: Dictionary<User[]> = _.groupBy(props.users, (user: User) => {
    return user.username.toUpperCase()[0];
  });

  const allUsers: Users[] = Object.keys(groupedUsers).map((letter) => {
    return {
      letter,
      groupedUsers: groupedUsers[letter],
    };
  });

  const renderLetters = (): JSX.Element[] => {
    return allUsers.map((user: Users, index: number) => {
      return (
        <React.Fragment key={index}>
          <div className="letter">{user.letter}</div>
          {renderUserItem(user.groupedUsers)}
        </React.Fragment>
      );
    });
  };

  const renderUserItem = (usersList: User[]): JSX.Element[] => {
    return usersList.map((user: User, index: number) => {
      return (
        <div key={user._id}>
          <UserItem
            id={user._id}
            status={user.profile.status}
            username={user.username}
            picture={user.profile.picture}
            onUserItemClick={props.onUserItemClick}
          />
        </div>
      );
    });
  };

  return <StyledUsersList>{renderLetters()}</StyledUsersList>;
};

export default withTracker((props) => {
  return {
    users:
      props.searchedValue === ''
        ? Meteor.users
            .find(
              {
                _id: {
                  $ne: Meteor.userId(),
                },
              },
              {
                sort: {
                  username: 1,
                },
              }
            )
            .fetch()
        : props.searchedUsers,
  };
})(UsersList);
