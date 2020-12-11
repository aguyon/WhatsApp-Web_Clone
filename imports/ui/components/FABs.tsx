import React from 'react';
import Slide from 'react-reveal/Slide';

import StyledFABs from '../elements/StyledFABs';

import FABItem from './FABItem';

export interface FABsProps {
  fabsVisible?: boolean;
  onFABItemClick?: () => void;
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FABs = (props: FABsProps): JSX.Element => {
  return (
    <StyledFABs fabsVisible={props.fabsVisible}>
      <Slide cascade top>
        <FABItem iconName="image" background="violet" onClick={props.onFABItemClick}>
          <input
            id="fileUpload"
            type="file"
            accept="image/*"
            onChange={props.onInputChange}
          />
        </FABItem>
        <FABItem iconName="camera" background="orange"></FABItem>
        <FABItem iconName="file" background="blue"></FABItem>
        <FABItem iconName="user" background="lightblue"></FABItem>
      </Slide>
    </StyledFABs>
  );
};

export default FABs;
