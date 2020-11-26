import React, { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import StyledHeader from '../elements/StyledHeader';

interface HeaderProps {
  children: ReactNode;
  icons: { icon: string; onClick?: () => void }[];
  iconClass: string;
  iconsSmallWidth?: boolean;
}

const Header: React.FC<HeaderProps> = (props): JSX.Element => {
  const { icons, iconClass } = props;

  const renderIcons = (): JSX.Element[] => {
    return icons.map((item: any, index: number) => {
      return (
        <FontAwesomeIcon
          key={index}
          icon={['fas', item.icon]}
          className={iconClass}
          onClick={item.onClick}
        />
      );
    });
  };

  return (
    <StyledHeader>
      {props.children}
      <div className={props.iconsSmallWidth ? 'icons--left small' : 'icons--left'}>
        {renderIcons()}
      </div>
    </StyledHeader>
  );
};

export default Header;
