import styled, { css } from 'styled-components';

import { FABsProps } from '../components/FABs';

const StyledFABs = styled.div`
  display: none;
  z-index: 200;

  @media screen and (min-width: 1441px) {
    position: absolute;
    top: -0.5rem;
    right: 5.6rem;
  }

  @media screen and (max-width: 1440px) {
    position: fixed;
    top: 5.5rem;
    right: 5.4rem;
  }

  ${(props: FABsProps) =>
    props.fabsVisible &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `}

  input[type=file] {
    display: none;
  }

  .fab {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
    cursor: pointer;
    width: 5.1rem;
    height: 5.1rem;
    border-radius: 50%;
    box-shadow: ${({ theme }) =>
      `0 2px 2px 0 rgba(${theme.color.shadow}, 0.17), 0 6px 8px 0 rgba(${theme.color.shadow}, 0.29)`};
  }

  .fab--icon {
    font-size: 2rem;
    color: white;
  }
`;

export default StyledFABs;
