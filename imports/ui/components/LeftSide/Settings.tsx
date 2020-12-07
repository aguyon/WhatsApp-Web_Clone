import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAdjust,
  faBan,
  faBell,
  faExpand,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import StyledSettings from '../../elements/StyledSettings';

import Avatar from '../Avatar';

interface SettingsProps {
  avatarUrl: string;
  userInfos: { username: string; status: string };
  setSettingsVisible: Function;
  toggleTheme: () => void;
}

const Settings = (props: SettingsProps): JSX.Element => {
  const settings: { icon: IconProp; title: string; onClick?: () => void }[] = [
    { icon: faBell, title: 'Notifications' },
    { icon: faAdjust, title: 'Thème', onClick: () => props.toggleTheme() },
    { icon: faExpand, title: `Fond d'écran de la discussion` },
    { icon: faBan, title: 'Contacts bloqués' },
    { icon: faQuestionCircle, title: 'Aide' },
  ];

  return (
    <StyledSettings>
      <div
        className="settings--infosContainer"
        onClick={() => props.setSettingsVisible(false)}
      >
        <div className="settings--avatar">
          <Avatar large avatar_url={props.avatarUrl} />
        </div>
        <div className="settings--infos">
          <span>{props.userInfos.username}</span>
          <span>{props.userInfos.status}</span>
        </div>
      </div>
      <div>
        {settings.map((setting, index) => {
          return (
            <div key={index} className="settings--item" onClick={setting.onClick}>
              <div className="settings--icon">
                <FontAwesomeIcon icon={setting.icon} size="2x" />
              </div>
              <div className="settings--title">
                <span>{setting.title}</span>
              </div>
            </div>
          );
        })}
      </div>
    </StyledSettings>
  );
};

export default Settings;
