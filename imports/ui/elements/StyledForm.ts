import styled from 'styled-components';

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 6rem);
  height: auto;
  padding: 1rem 3rem;
  background: ${({ theme }) => theme.color.drawer_section_background};

  .form--title {
    color: ${({ theme }) => theme.color.teal};
    font-size: 1.4rem;
    margin-bottom: 1.9rem;
    font-weight: 400;
  }

  .form--container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 2rem;
    margin: 0.8rem 0rem;
  }

  .form--input {
    width: 80%;
    border: none;
    outline: none;
    font-size: 1.7rem;
    padding-bottom: 0.4rem;
    background: ${({ theme }) => theme.color.background_default};
    color: ${({ theme }) => theme.color.primary};
  }

  .__border {
    border-bottom: 0.2rem solid ${({ theme }) => theme.color.teal}; !important;
  }

  .form--icon {
    width: 10%;
    font-size: 1.7rem;
    text-align: right;
    color: ${({ theme }) => theme.color.icon};
    cursor: pointer;
  }
`;

export default StyledForm;
