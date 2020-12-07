import styled from 'styled-components';

const StyledDropdown = styled.div`
  background: ${({ theme }) => theme.color.dropdown_background};
  z-index: 300;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: ${({ theme }) =>
    `0 2px 5px 0 rgba(${theme.color.shadow}, 0.26), 0 2px 10px 0 rgba(${theme.color.shadow}, 0.16)`};

  @media screen and (min-width: 1441px) {
    position: absolute;
    top: 5.3rem;
    left: 20%;
  }

  @media screen and (max-width: 1440px) {
    position: fixed;
    top: 5.3rem;
    left: 19%;
  }

  .dropdown--list {
    padding: 1rem 0 1rem 0;
  }

  .dropdown--items {
    list-style: none;
  }

  .dropdown--item {
    padding: 13px 58px 13px 24px;
    color: ${({ theme }) => theme.color.primary};
    font-size: 1.5rem;

    &:hover {
      background: ${({ theme }) => theme.color.hover};
    }
  }
`;

export default StyledDropdown;
