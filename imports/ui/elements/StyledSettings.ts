import styled from 'styled-components';

const StyledSettings = styled.div`
  height: 82%;
  color: ${({ theme }) => theme.color.primary_strong};
  cursor: pointer;

  .settings--infosContainer {
    display: flex;
    font-size: 1.8rem;

    &:hover {
      background: ${({ theme }) => theme.color.hover};
    }
  }

  .settings--avatar {
    padding: 16px 19px;
  }

  .settings--infos {
    display: flex;
    justify-content: center;
    flex-direction: column;

    span:first-child {
      color: ${({ theme }) => theme.color.primary_strong};
    }

    span:last-child {
      font-size: 1.5rem;
      margin-top: 4px;
      color: ${({ theme }) => theme.color.secondary};
    }
  }

  .settings--item {
    position: relative;
    display: flex;
    flex: none;
    align-items: center;
    height: 60px;

    &:hover {
      background: ${({ theme }) => theme.color.hover};
    }
  }

  .settings--icon {
    display: flex;
    flex: none;
    justify-content: center;
    width: 74px;
    color: ${({ theme }) => theme.color.icon};
  }

  .settings--title {
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    height: 100%;
    font-size: 1.8rem;
    box-sizing: border-box;
    overflow: hidden;
    border-bottom: ${({ theme }) => '0.05rem solid ' + theme.color.hover};
  }
`;

export default StyledSettings;
