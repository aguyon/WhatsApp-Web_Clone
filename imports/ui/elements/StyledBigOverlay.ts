import styled, { css } from 'styled-components';

const StyledBigOverlay = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.color.popup_backdrop};
  z-index: 300;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  ${(props) =>
    props.avatarBigOverlay &&
    css`
      background: ${({ theme }) => theme.color.popup_backdrop_avatar};
    `}
`;

export default StyledBigOverlay;
