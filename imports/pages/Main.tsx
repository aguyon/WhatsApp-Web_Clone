import React from 'react';

import StyledMain from '../ui/elements/StyledMain';

import MainLeft from '../ui/components/MainLeft';
import MainRight from '../ui/components/MainRight';

const Main = (props: any): JSX.Element => (
  <StyledMain>
    <MainLeft />
    <MainRight right />
  </StyledMain>
);

export default Main;
