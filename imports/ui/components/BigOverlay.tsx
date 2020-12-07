import React, { ReactNode } from 'react';

import StyledBigOverlay from '../elements/StyledBigOverlay';

interface BigOverlayProps {
  children: ReactNode;
  avatarBigOverlay?: boolean;
}

const BigOverlay = (props: BigOverlayProps): JSX.Element => {
  return (
    <StyledBigOverlay avatarBigOverlay={props.avatarBigOverlay}>
      {props.children}
    </StyledBigOverlay>
  );
};

export default BigOverlay;
