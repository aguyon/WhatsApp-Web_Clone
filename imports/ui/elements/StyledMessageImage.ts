import styled, { css } from 'styled-components';

const StyledMessageImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 30rem;
  max-height: 33rem;
  border-radius: 0.6rem;
  padding: 0.4rem;
  background: white;
  margin-bottom: 0.2rem;
  position: relative;

  ${(props) =>
    props.mine &&
    css`
      background: ${({ theme }) => theme.color.message_outgoing_background};
      margin-left: auto;
      .__date {
        position: relative !important;
        right: 0.4rem !important;
      }
    `}

  .image {
    width: 100%;
    height: 100%;
    border-radius: 0.6rem;
  }

  .image--overlay {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.3rem), transparent);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2.8rem;
    z-index: 2;
    margin-bottom: 0.4rem;
  }

  .image--date {
    color: ${({ theme }) => theme.color.message_secondary};
  }
`;

export default StyledMessageImage;
