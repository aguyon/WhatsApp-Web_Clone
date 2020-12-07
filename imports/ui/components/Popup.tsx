import React from 'react';

import StyledPopup from '../elements/StyledPopup';

interface PopupProps {
  title: string;
  onCancel: () => void;
  onConfirm: () => void;
}

const Popup = (props: PopupProps): JSX.Element => {
  return (
    <StyledPopup>
      <div className="popup">
        <div className="popup--title">{props.title}</div>
        <div className="popup--buttonContainer">
          <div className="popup--button" onClick={props.onCancel}>
            Annuler
          </div>
          <div className="popup--button delete" onClick={props.onConfirm}>
            Supprimer pour moi
          </div>
        </div>
      </div>
    </StyledPopup>
  );
};

export default Popup;
