import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPaperPlane, faPlus } from '@fortawesome/free-solid-svg-icons';

import { MessageType } from '../../api/models';

import StyledModal from '../elements/StyledModal';

interface ModalProps {
  selectedImage: string;
  onClose: () => void;
  onUpload: (file: any, type: MessageType) => void;
}

const Modal = (props: ModalProps) => {
  const responsiveImage = (src: string, width: number, height: number) => {
    return (
      <div style={{ width }} className="responsive-image">
        <div style={{ paddingBottom: (height / width) * 100 + '%' }} />
        <img src={src} className="responsive-image__image" />
      </div>
    );
  };

  return (
    <StyledModal>
      <div className="modal--header">
        <FontAwesomeIcon
          icon={faTimes}
          className="modal--header__icon"
          size="2x"
          onClick={props.onClose}
        />
        <span className="modal--header__title">Aperçu</span>
      </div>
      <div className="modal--body">
        {responsiveImage(props.selectedImage, 529, 550)}
        <div
          className="modal--body__fab"
          onClick={() => props.onUpload('', MessageType.IMAGE)}
        >
          <FontAwesomeIcon icon={faPaperPlane} size="3x" />
        </div>
      </div>
      <div className="modal--footer">
        <div className="modal--footer__box">
          <img
            style={{ width: '100%', height: '100%' }}
            alt="uploaded img"
            src={props.selectedImage}
          />
        </div>
        <div className="modal--footer__box">
          <FontAwesomeIcon icon={faPlus} size="2x" />
          <span>Ajouter un fichier</span>
        </div>
      </div>
    </StyledModal>
  );
};

export default Modal;
