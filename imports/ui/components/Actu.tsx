import React from 'react';

import StyledActu from '../elements/StyledActu';

interface ActuProps {
  status: string;
  phone: string;
}

const Actu = (props: ActuProps): JSX.Element => {
  return (
    <StyledActu>
      <span className="actu--title">Actu et numéro de téléphone</span>
      <span className="actu--content">{props.status}</span>
      <div className="actu--divider" />
      <span className="actu--phone">{props.phone}</span>
    </StyledActu>
  );
};

export default Actu;
