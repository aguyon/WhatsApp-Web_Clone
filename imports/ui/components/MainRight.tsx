import React from 'react';

import StyledMainRight from '../elements/StyledMainRight';

import RightImg from '../components/RightImg';

const MainRight = (props: any): JSX.Element => {
  const messageText: string =
    "WhatsApp se connecte à votre téléphone pour synchroniser les messages. Pour réduire l'utilisation des données, connectez votre téléphone à un réseau WI-FI.";

  return (
    <StyledMainRight>
      <RightImg right={props.right} messageText={messageText} />
    </StyledMainRight>
  );
};

export default MainRight;
