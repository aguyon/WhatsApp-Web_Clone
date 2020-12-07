import styled from 'styled-components';

const StyledLoginForm = styled.div`
  .label {
    background: ${({ theme }) => theme.color.login_input_background};
    border-radius: 0.7rem;
    padding-left: 2.5rem;
    padding-right: 2.2rem;
    height: 3.5rem;
    width: 18rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.3rem;
  }

  .icon {
    color: ${({ theme }) => theme.color.icon};
    font-size: 1.3rem;
    margin-right: 1.5rem;
  }

  .input {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2rem;
    min-height: 2rem;
    outline: none;
    width: 100%;
    user-select: text;
    z-index: 1;
    border: none;
    color: ${({ theme }) => theme.color.login_input_text};
    background: ${({ theme }) => theme.color.background_active};

    &::placeholder {
      color: ${({ theme }) => theme.color.input_placeholder};
      opacity: 1;
      font-size: 1.4rem;
    }

    &:-webkit-autofill {
      -webkit-background-clip: text;
      -webkit-text-fill-color: ${({ theme }) => theme.color.login_input_text} !important;
    }
  }

  .loginBtn {
    width: 22.7rem;
    border-radius: 0.7rem;
    border-color: transparent;
    height: 3.5rem;
    font-size: 1.4rem;
    font-weight: bold;
    background: ${({ theme }) => theme.color.teal};
    color: white;
    margin-top: 0.3rem;
    outline: none;
    cursor: pointer;
    text-transform: uppercase;

    &:active {
      outline: none;
    }

    &:disabled,
    &[disabled] {
      background-color: ${({ theme }) => theme.color.button_disabled};
    }
  }
`;

export default StyledLoginForm;
