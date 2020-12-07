import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 3.2rem);
  height: 6%;
  background: ${({ theme }) => theme.color.message_footer_background};
  padding: 1rem 1.6rem;
  z-index: 1;

  .message--label {
    background: ${({ theme }) => theme.color.message_input_background};
    border-radius: 1.8rem;
    padding-left: 2.5rem;
    padding-right: 2.2rem;
    height: 4.2rem;
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .message--input {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2rem;
    min-height: 2rem;
    outline: none;
    width: 100%;
    user-select: text;
    z-index: 1;
    border: none;
    color: ${({ theme }) => theme.color.message_input};
    background-color: ${({ theme }) => theme.color.message_input_background};

    &::placeholder {
      color: ${({ theme }) => theme.color.input_placeholder};
      opacity: 1;
      font-size: 1.4rem;
    }
  }

  .iconFooter {
    font-size: 3rem;
    color: ${({ theme }) => theme.color.icon};
    cursor: pointer;
  }
`;

export default StyledFooter;
