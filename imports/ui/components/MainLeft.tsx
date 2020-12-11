import React from 'react';
import { useHistory } from 'react-router-dom';
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
import UsersList from './LeftSide/UsersList';
import Dropdown from './Dropdown';
import Settings from './LeftSide/Settings';
import Profile from './LeftSide/Profile';

interface MainLeftProps {
  // Props withTracker
  userInfos: { username: string; status: string };
  picture: string;

  // Props Main
  toggleTheme: () => void;
  chats: Chat[];
  onChatClick: (id: string) => void;
  selectedChat: Chat;
  onUserItemClick: (id: string, username: string, picture: string) => void;
}

const MainLeft = (props: MainLeftProps): JSX.Element => {
  const [leftSideVisible, setLeftSideVisible] = React.useState<boolean>(false);
  const [usersListVisible, setUsersListVisible] = React.useState<boolean>(false);
  const [settingsVisible, setSettingsVisible] = React.useState<boolean>(false);
  const [dropdownVisible, setDropdownVisible] = React.useState<boolean>(false);
  const [searchedValue, setSearchedValue] = React.useState<string>('');
  const [searchedUsers, setSearchedUsers] = React.useState<User[]>([]);

  let history = useHistory();

  const icons: { id: number; icon: string; onClick?: () => void }[] = [
    { id: 1, icon: 'circle-notch' },
    { id: 2, icon: 'comment-alt', onClick: () => showUsersList() },
    { id: 3, icon: 'ellipsis-v', onClick: () => toggleMenu() },
  ];

  const menuItems: { item: string; onClick?: () => void }[] = [
    { item: 'Nouveau groupe' },
    { item: 'Profil', onClick: () => toggleLeftSide() },
    { item: 'Paramètres', onClick: () => showSettings() },
    { item: 'Déconnexion', onClick: () => logout() },
  ];

  const showUsersList = (): void => {
    setLeftSideVisible(true);
    setUsersListVisible(true);
    setSettingsVisible(false);
  };

  const toggleMenu = (): void => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleLeftSide = (): void => {
    if (!leftSideVisible) {
      setLeftSideVisible(true);
      setDropdownVisible(false);
    } else {
      setLeftSideVisible(false);
      setUsersListVisible(false);
      setDropdownVisible(false);
      setSettingsVisible(false);
    }
  };

  const showSettings = (): void => {
    setLeftSideVisible(true);
    setUsersListVisible(false);
    setSettingsVisible(true);
  };

  const logout = (): void => {
    Meteor.logout((err: Error) => {
      if (err) console.log('error logout', err);
      else history.replace('/login');
    });
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
    } else if (settingsVisible) {
      return (
        <>
          <LeftSideHeader title="Paramètres" onLeftSideHeaderClose={toggleLeftSide} />
          <Settings
            avatarUrl={props.picture}
            userInfos={props.userInfos}
            setSettingsVisible={setSettingsVisible}
            toggleTheme={props.toggleTheme}
          />
        </>
      );
    }
    return (
      <>
        <LeftSideHeader title="Profil" onLeftSideHeaderClose={toggleLeftSide} />
        <Profile picture={props.picture} />
      </>
    );
  };

  return (
    <StyledMainLeft>
      {!leftSideVisible ? (
        <>
          <Header icons={icons} dropdownVisible={dropdownVisible}>
            <Avatar avatar_url={props.picture} onAvatarClick={toggleLeftSide} />
            {dropdownVisible ? <Dropdown menuItems={menuItems} /> : null}
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
    userInfos: {
      username: Meteor.user().username,
      status: Meteor.user().profile.status,
    },
    picture: Meteor.user().profile.picture,
  };
})(MainLeft);
