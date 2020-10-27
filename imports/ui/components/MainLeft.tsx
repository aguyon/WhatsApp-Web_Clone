import React from 'react';

import StyledMainLeft from '../elements/StyledMainLeft';

import Header from '../components/Header';

const MainLeft = (props: any): JSX.Element => {
  const icons: string[] = ['circle-notch', 'comment-alt', 'ellipsis-v'];

  return (
    <StyledMainLeft>
      <Header icons={icons} iconClass="greyIcon" />
    </StyledMainLeft>
  );
};

export default MainLeft;
