import styled, { css } from 'styled-components';

const StyledRightImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.color.intro_background};

  ${(props) =>
    props.right &&
    css`
      width: 100%;
      height: 100%;
    `}

  ${(props) =>
    props.border &&
    css`
      border-bottom: ${({ theme }) => '0.6rem solid ' + theme.color.intro_border};
    `}

  .rightImg--image {
    width: 25rem;
    height: 25rem;
    margin-bottom: 2.8rem;
    border-radius: 50%;
  }

  .rightImg--title {
    font-size: 3.3rem;
    margin-bottom: 1.8rem;
    color: ${({ theme }) => theme.color.intro_primary};
    font-weight: 300;
  }

  .rightImg--div {
    margin-bottom: 3rem;
  }

  .rightImg--primary-text {
    text-align: center;
    color: ${({ theme }) => theme.color.intro_secondary};
    font-size: 1.4rem;
    line-height: 2rem;
    margin-bottom: 3.4rem;
    white-space: pre-wrap;
  }

  .rightImg--divider {
    width: 100%;
    height: 0.1rem;
    background: ${({ theme }) => theme.color.border_strong};
    margin-bottom: 0.1rem;
  }

  .rightImg--secondary-text {
    text-align: center;
    color: ${({ theme }) => theme.color.intro_secondary};
    font-size: 1.4rem;
    line-height: 2rem;
    margin-top: 3.4rem;
    white-space: pre-wrap;
  }

  .rightImg--link {
    color: ${({ theme }) => theme.color.button_secondary};
    text-decoration: none;
  }
`;

export default StyledRightImg;
