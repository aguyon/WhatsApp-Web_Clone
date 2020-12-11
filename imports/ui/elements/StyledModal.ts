import styled from 'styled-components';

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  z-index: 1000000000;

  .modal--header {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: ${({ theme }) => theme.color.modal_header};
    padding-left: 2.5rem;
    height: 8%;
    width: calc(100% - 2.5rem);
  }

  .modal--header__icon {
    margin-right: 2.4rem;
    background: transparent;
    color: white;
    cursor: pointer;
  }

  .modal--header__title {
    font-weight: 500;
    font-size: 1.9rem;
    color: white;
    margin-top: -2px;
  }

  .modal--body {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: inherit;
    background: ${({ theme }) => theme.color.modal_image_background};
  }

  .modal--body__image-container {
    position: relative;
    width: 100%;
  }

  .modal--body__image {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    max-width: 850px;
    max-height: 580px;
  }

  .modal--body__fab {
    position: absolute;
    bottom: -3rem;
    right: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.button_round_background};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    color: white;
  }

  .modal--footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 20rem;
    width: calc(100% - 4rem);
    padding: 0 2rem;
    background: ${({ theme }) => theme.color.modal_footer};
  }

  .modal--footer__box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: calc(9.5rem - 0.8rem);
    height: calc(9.5rem - 0.8rem);
    padding: 0.4rem;
    background: ${({ theme }) => theme.color.button_alternative_background};
    margin-right: 0.8rem;
    color: ${({ theme }) => theme.color.button_alternative};
    cursor: pointer;

    span {
      margin-top: 3px;
      text-transform: uppercase;
      text-align: center;
      font-size: 1.2rem;
      font-weight: 500;
    }
  }
`;

export default StyledModal;
