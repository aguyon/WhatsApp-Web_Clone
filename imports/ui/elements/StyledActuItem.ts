import styled, { css } from 'styled-components';

const StyledActuItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.9rem 3rem;
  width: calc(100% - 6rem);
  height: calc(6rem - 3.8rem);
  cursor: pointer;
  font-size: 1.6rem;
  margin-bottom: 1rem;
  background: ${({ theme }) => theme.color.drawer_section_background};
  color: ${({ theme }) => theme.color.primary_strong};
  font-weight: 500;

  &:hover {
    background: ${({ theme }) => theme.color.hover};
  }

  ${(props) =>
    props.red &&
    css`
      color: #ef697a;
      .AI--icon {
        color: #ef697a !important;
      }
    `}

  .AI--icon {
    color: rgba(0, 0, 0, 0.3);
    margin-right: 3rem;
    font-size: 2rem;
  }
`;

export default StyledActuItem;
