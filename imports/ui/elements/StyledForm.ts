import styled from 'styled-components';

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 6rem);
  height: auto;
  padding: 1rem 3rem;
  background: ${({ theme }) => theme.leftSide.color.form};

  .form--title {
    color: ${({ theme }) => theme.leftSide.color.border};
    font-size: 1.4rem;
    margin-bottom: 1.9rem;
    font-weight: 500;
  }

  .form--container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 2rem;
    margin: 0.8rem 0rem;
    color: #4a4a4a;
  }

  .form--input {
    width: 80%;
    border: none;
    outline: none;
    font-size: 1.7rem;
    padding-bottom: 0.4rem;
    background: ${({ theme }) => theme.leftSide.color.form};
    color: ${({ theme }) => theme.leftSide.color.input};
  }

  .__border {
    border-bottom: 0.2rem solid ${({ theme }) => theme.leftSide.color.border}; !important;
  }

  .form--icon {
    width: 10%;
    font-size: 1.7rem;
    text-align: right;
    color: ${({ theme }) => theme.leftSide.color.icon};
    cursor: pointer;
  }
`;

export default StyledForm;
