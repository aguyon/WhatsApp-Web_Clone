import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import { Chat } from '../../api/models';

import StyledMainLeft from '../elements/StyledMainLeft';

import Header from '../components/Header';
import Avatar from '../components/Avatar';
import Status from '../components/Status';
import SearchBar from '../components/SearchBar';
import ChatList from '../components/ChatList';
import Profile from './Profile/Profile';
import HeaderProfile from './Profile/HeaderProfile';
import Form from './Profile/Form';

interface MainLeftProps {
  // Props withTracker
  picture: string;

  // Props Main
  chats: Chat[];
  onChatClick: (id: string) => void;
  selectedChat: Chat;
}

const MainLeft = (props: MainLeftProps): JSX.Element => {
  const [profileVisible, setProfileVisible] = React.useState<boolean>(false);

  const icons: { icon: string }[] = [
    { icon: 'circle-notch' },
    { icon: 'comment-alt' },
    { icon: 'ellipsis-v' },
  ];

  const toggleProfile = (): void => {
    if (!profileVisible) setProfileVisible(true);
    else setProfileVisible(false);
  };

  const renderProfile = (): JSX.Element => {
    return (
      <>
        <HeaderProfile onProfileClose={toggleProfile} />
        <div className="profile--avatar">
          <Avatar big inProfile avatar_url={props.picture} />
        </div>
        <Form type="username" />
        <div className="profile--desc">
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
      {!profileVisible ? (
        <>
          <Header icons={icons} iconClass="greyIcon">
            <Avatar avatar_url={props.picture} onAvatarClick={toggleProfile} />
          </Header>
          <Status />
          <SearchBar />
          <ChatList
            chats={props.chats}
            onChatClick={props.onChatClick}
            selectedChat={props.selectedChat}
          />
        </>
      ) : (
        <Profile>{renderProfile()}</Profile>
      )}
    </StyledMainLeft>
  );
};

export default withTracker(() => {
  return {
    picture: Meteor.user().profile.picture,
  };
})(MainLeft);
