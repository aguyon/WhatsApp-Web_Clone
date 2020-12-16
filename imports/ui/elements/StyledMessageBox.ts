import styled, { css } from 'styled-components';

const lightImageUrl: string = './images/bg-whatsapp-message-light.png';
const darkImageUrl: string = './images/bg-whatsapp-message-dark.jpg';

const StyledMessageBox = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 14.8rem);
  height: calc(88% - 2rem);
  padding: 1rem 7.4rem;
  overflow-y: auto;
  position: relative;
  z-index: 0;

  ${(props) =>
    props.themeStorage === 'light'
      ? css`
          background-image: url(${lightImageUrl});
        `
      : css`
          background-image: url(${darkImageUrl});
        `}

  .message--overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0d1418;
    opacity: 0.8;
    z-index: 0;
  }

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 0.2rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .day--container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1.2rem;
  }

  .day--wrapper {
    background: ${({ theme }) => theme.color.message_sended_date_background};
    border-radius: 0.7rem;
    padding: 0.6rem 1.2rem;
    text-align: center;
    height: 2.2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .day--span {
    color: ${({ theme }) => theme.color.message_sended_date_text};
    font-size: 1.25rem;
    text-transform: uppercase;
  }

  .messageContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .message {
    padding: 0.8rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.color.message_primary};
    background: ${({ theme }) => theme.color.message_incoming_background};
    border-radius: 0.7rem;
    margin-bottom: 0.2rem;
    width: auto;
    max-width: 65%;
    position: relative;
  }

  .detailsContainer {
    font-size: 1.1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: relative;
    bottom: -0.7rem;
    right: -0.7rem;
    width: 5.5rem;
    margin-left: 5rem;
    color: ${({ theme }) => theme.color.message_secondary};
  }

  .message--mine {
    background: ${({ theme }) => theme.color.message_outgoing_background};
    margin-left: auto;
    align-items: flex-end;
  }
`;

export default StyledMessageBox;
