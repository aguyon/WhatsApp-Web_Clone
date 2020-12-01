import styled from 'styled-components';

import StyledChatList from './StyledChatList';

const StyledUsersList = styled(StyledChatList)`
  height: 80%;

  .letter {
    height: 7.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.leftSide.color.border};
    text-transform: uppercase;
    background: ${({ theme }) => theme.leftSide.color.letter};
    padding: 3rem 0 1.5rem 3.2rem;
  }
`;

export default StyledUsersList;
