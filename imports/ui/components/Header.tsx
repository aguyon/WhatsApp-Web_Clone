import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import StyledHeader from '../elements/StyledHeader';

const Header = (props: any): JSX.Element => {
  const { icons, iconClass } = props;

  const renderIcons = (): JSX.Element[] => {
    return icons.map((icon: any, index: number) => {
      return <FontAwesomeIcon key={index} icon={icon} className={iconClass} />;
    });
  };

  return (
    <StyledHeader>
      <div className={props.iconsWidthSmall ? 'icons--left small' : 'icons--left'}>
        {renderIcons()}
      </div>
    </StyledHeader>
  );
};

export default Header;
