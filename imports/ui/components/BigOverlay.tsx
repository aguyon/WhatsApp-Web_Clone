import React, { ReactNode } from 'react';

import StyledBigOverlay from '../elements/StyledBigOverlay';

interface BigOverlayProps {
  children: ReactNode;
}

const BigOverlay = (props: BigOverlayProps): JSX.Element => {
  return <StyledBigOverlay>{props.children}</StyledBigOverlay>;
};

export default BigOverlay;
