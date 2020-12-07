import styled from 'styled-components';

const StyledPopup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 400;

  .popup {
    display: flex;
    overflow: hidden;
    flex-direction: column;
    width: 35rem;
    background-color: ${({ theme }) => theme.color.popup_background};
    border-radius: 0.3rem;
    box-shadow: 0 1.7rem 5rem 0 rgba(0, 0, 0, 0.19), 0 1.2rem 1.5rem 0 rgba(0, 0, 0, 0.24);
    padding: 2.2rem 2.4rem 2rem;
  }

  .popup--title {
    font-size: 2rem;
    font-weight: 400;
    text-align: left;
    color: ${({ theme }) => theme.color.primary_strong};
  }

  .popup--buttonContainer {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 5rem 0.5rem 0;
  }

  .popup--button {
    text-align: center;
    padding: 1rem 1.4rem;
    border-radius: 3px;
    margin-left: 5px;
    color: ${({ theme }) => theme.color.button_primary};
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 400;
    transition: box-shadow 0.18s ease-out, background 0.18s ease-out, color 0.18s ease-out;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.color.button_primary_hover};
      box-shadow: 0 0.1rem 0.1rem 0 rgba(0, 0, 0, 0.06),
        0 0.2rem 0.5rem 0 rgba(0, 0, 0, 0.2);
    }
  }

  .delete {
    background: ${({ theme }) => theme.color.button_primary};
    color: ${({ theme }) => theme.color.background_default};

    &:hover {
      background-color: ${({ theme }) => theme.color.button_secondary_hover};
      box-shadow: 0 0.1rem 0.1rem 0 rgba(0, 0, 0, 0.06),
        0 0.2rem 0.5rem 0 rgba(0, 0, 0, 0.2);
    }
  }
`;

export default StyledPopup;
