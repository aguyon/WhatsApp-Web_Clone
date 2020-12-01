import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import StyledActuItem from '../../elements/StyledActuItem';

interface ActuItemProps {
  red?: boolean;
  iconName: IconProp;
  content: string;
}

const ActuItem = (props: ActuItemProps): JSX.Element => {
  return (
    <StyledActuItem red={props.red}>
      <FontAwesomeIcon icon={props.iconName} className="AI--icon" />
      <span>{props.content}</span>
    </StyledActuItem>
  );
};

export default ActuItem;
