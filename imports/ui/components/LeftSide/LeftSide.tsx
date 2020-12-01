import React, { ReactNode } from 'react';

import StyledLeftSide from '../../elements/StyledLeftSide';

interface LeftSideProps {
  children: ReactNode;
}

const LeftSide = (props: LeftSideProps): JSX.Element => {
  return <StyledLeftSide>{props.children}</StyledLeftSide>;
};

export default LeftSide;
