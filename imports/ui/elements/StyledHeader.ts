import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 3.2rem);
  height: 3rem;
  background: ${({ theme }) => theme.color.header_background};
  padding: 1.5rem 1.6rem;
  z-index: 1;

  .icons--left {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 14rem;
    height: 4rem;
  }

  .small {
    width: 4rem;
  }

  .icon {
    color: ${({ theme }) => theme.color.icon};
    font-size: 2rem;
    cursor: pointer;
    z-index: 1;
  }

  .icon--active-overlay {
    color: ${({ theme }) => theme.color.icon};
    position: absolute;
    font-size: 2rem;
    cursor: pointer;
    width: 2.2rem;
    height: 2.2rem;
    padding: 0.8rem;
    margin-left: 105px;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.header_icon_active};
    z-index: 0;
  }

  .headerMsg--container {
    text-align: left;
    flex: 1;
    padding-left: 2rem;
    height: 4.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .headerMsg--title {
    color: ${({ theme }) => theme.color.primary_strong};
    font-size: 1.6rem;
  }

  .headerMsg--subtitle {
    color: ${({ theme }) => theme.color.secondary};
    font-size: 1.3rem;
  }
`;

export default StyledHeader;
