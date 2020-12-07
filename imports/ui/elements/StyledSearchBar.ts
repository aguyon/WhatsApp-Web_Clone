import styled from 'styled-components';

const StyledSearchBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.color.search_container_background};
  width: 100%;
  height: 6%;
  position: relative;
  border-bottom: ${({ theme }) => '0.05rem solid ' + theme.color.border_strong};

  .searchbar--label {
    background: ${({ theme }) => theme.color.search_input_background};
    position: absolute;
    left: 1.2rem;
    right: 1.4rem;
    border-radius: 1.8rem;
    padding-left: 2.5rem;
    padding-right: 2.2rem;
    height: 3.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .searchbar--icon {
    color: ${({ theme }) => theme.color.icon};
    font-size: 1.3rem;
    margin-right: 1.5rem;
  }

  .searchbar--input {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2rem;
    min-height: 2rem;
    outline: none;
    width: 100%;
    background-color: ${({ theme }) => theme.color.search_input_background};
    user-select: text;
    z-index: 0;
    border: none;
    color: ${({ theme }) => theme.color.input_placeholder};

    &::placeholder {
      color: ${({ theme }) => theme.color.input_placeholder};
      opacity: 1;
      font-size: 1.4rem;
    }
  }
`;

export default StyledSearchBar;
