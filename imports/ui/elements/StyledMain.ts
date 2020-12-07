import styled from 'styled-components';

export const StyledMain = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 100;

  @media screen and (min-width: 1441px) {
    top: 19px;
    width: 1396px;
    height: calc(100% - 38px);
  }

  @media screen and (max-width: 1440px) {
    width: 100%;
    height: 100%;
  }

  margin: 0 auto;
  position: relative;
  box-shadow: ${({ theme }) =>
    `0 1px 1px 0 rgba(${theme.color.shadow}, 0.06), 0 2px 5px 0 rgba(${theme.color.shadow}, 0.2)`};
`;

export default StyledMain;
