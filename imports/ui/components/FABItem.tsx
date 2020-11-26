import React, { CSSProperties, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface FABItemProps {
  iconName: IconProp;
  background: string;
  children?: ReactNode;
  onClick?: () => void;
}

const FABItem = (props: FABItemProps): JSX.Element => {
  const setBackground = (): CSSProperties => {
    switch (props.background) {
      case 'violet':
        return {
          background: '#BF59CF',
        };
      case 'orange':
        return {
          background: '#F47B34',
        };
      case 'blue':
        return {
          background: '#5157AE',
        };
      case 'lightblue':
        return {
          background: '#0A7BBF',
        };

      default:
        return;
    }
  };

  return (
    <div className="fab" style={setBackground()} onClick={props.onClick}>
      <FontAwesomeIcon icon={props.iconName} className="fab--icon" />
      {props.children}
    </div>
  );
};

export default FABItem;
