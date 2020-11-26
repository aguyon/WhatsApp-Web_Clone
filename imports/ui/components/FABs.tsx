import React from 'react';

import StyledFABs from '../elements/StyledFABs';

import FABItem from './FABItem';

interface FABsProps {
  fabsVisible: boolean;
  onFABItemClick: () => void;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FABs = (props: FABsProps) => {
  return (
    <StyledFABs fabsVisible={props.fabsVisible}>
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
    </StyledFABs>
  );
};

export default FABs;
