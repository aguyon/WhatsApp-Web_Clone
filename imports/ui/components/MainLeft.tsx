import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import { Chat, User } from '../../api/models';

import StyledMainLeft from '../elements/StyledMainLeft';

import Header from '../components/Header';
import Avatar from '../components/Avatar';
import Status from '../components/Status';
import SearchBar from '../components/SearchBar';
import ChatList from '../components/ChatList';
import LeftSide from './LeftSide/LeftSide';
import LeftSideHeader from './LeftSide/LeftSideHeader';
import Form from './LeftSide/Form';
import UsersList from './LeftSide/UsersList';

interface MainLeftProps {
  // Props withTracker
  picture: string;

  // Props Main
  chats: Chat[];
  onChatClick: (id: string) => void;
  selectedChat: Chat;
  onUserItemClick: (id: string, username: string, picture: string) => void;
}

const MainLeft = (props: MainLeftProps): JSX.Element => {
  const [leftSideVisible, setLeftSideVisible] = React.useState<boolean>(false);
  const [usersListVisible, setUsersListVisible] = React.useState<boolean>(false);
  const [searchedValue, setSearchedValue] = React.useState<string>('');
  const [searchedUsers, setSearchedUsers] = React.useState<User[]>([]);

  const icons: { icon: string; onClick?: () => void }[] = [
    { icon: 'circle-notch' },
    { icon: 'comment-alt', onClick: () => showUsersList() },
    { icon: 'ellipsis-v' },
  ];

  const showUsersList = (): void => {
    setLeftSideVisible(true);
    setUsersListVisible(true);
  };

  const toggleLeftSide = (): void => {
    if (!leftSideVisible) setLeftSideVisible(true);
    else {
      setLeftSideVisible(false);
      setUsersListVisible(false);
    }
  };

  const userItemClick = (id: string, username: string, picture: string): void => {
    toggleLeftSide();
    props.onUserItemClick(id, username, picture);
  };

  const handleUserSearch = (value: string): void => {
    setSearchedValue(value);
    setSearchedUsers(
      Meteor.users
        .find(
          { _id: { $ne: Meteor.userId() }, username: { $regex: value, $options: 'i' } },
          { sort: { username: 1 } }
        )
        .fetch()
    );
  };

  const handleChatSearch = (value: string) => {
    return value;
  };

  const renderLeftSide = (): JSX.Element => {
    if (usersListVisible) {
      return (
        <>
          <LeftSideHeader
            title="Nouvelle discussion"
            onLeftSideHeaderClose={toggleLeftSide}
          />
          <SearchBar placeholder="Chercher des contacts" onSearch={handleUserSearch} />
          <UsersList
            onUserItemClick={userItemClick}
            searchedValue={searchedValue}
            searchedUsers={searchedUsers}
          />
        </>
      );
    }
    return (
      <>
        <LeftSideHeader title="Profil" onLeftSideHeaderClose={toggleLeftSide} />
        <div className="LS--avatar">
          <Avatar big inLeftSide avatar_url={props.picture} />
        </div>
        <Form type="username" />
        <div className="LS--desc">
          <span>
            Ce n'est pas votre nom d'utilisateur ou code pin. Ce nom sera visible auprès
            de vos contacts WhatsApp.
          </span>
        </div>
        <Form type="actu" />
      </>
    );
  };

  return (
    <StyledMainLeft>
      {!leftSideVisible ? (
        <>
          <Header icons={icons} iconClass="greyIcon">
            <Avatar avatar_url={props.picture} onAvatarClick={toggleLeftSide} />
          </Header>
          <Status />
          <SearchBar
            placeholder="Rechercher ou démarrer une nouvelle discussion"
            onSearch={handleChatSearch}
          />
          <ChatList
            chats={props.chats}
            onChatClick={props.onChatClick}
            selectedChat={props.selectedChat}
          />
        </>
      ) : (
        <LeftSide>{renderLeftSide()}</LeftSide>
      )}
    </StyledMainLeft>
  );
};

export default withTracker(() => {
  return {
    picture: Meteor.user().profile.picture,
  };
})(MainLeft);
