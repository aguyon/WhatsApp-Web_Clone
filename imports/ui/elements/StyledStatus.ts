import styled from 'styled-components';

const StyledStatus = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${({ theme }) => theme.color.status_background};
  padding: 13px 12px 14px 13px;
  min-height: 62px;
  cursor: pointer;

  .status--textContainer {
    padding-left: 1.3rem;
  }

  .text--big {
    color: ${({ theme }) => theme.color.status_primary};
    font-size: 1.6rem;
    line-height: 2.1rem;
    margin-bottom: 0.2rem;
  }

  .text--small {
    color: ${({ theme }) => theme.color.status_secondary};
    font-size: 1.4rem;

    &:hover {
      text-decoration: underline;
    }
  }

  .icon--color {
    color: ${({ theme }) => theme.color.status_background};
  }
`;

export default StyledStatus;
