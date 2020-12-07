import styled from 'styled-components';

import StyledChatList from './StyledChatList';

const StyledUsersList = styled(StyledChatList)`
  .letter {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.color.teal};
    text-transform: uppercase;
    padding: 3rem 0 1.5rem 3.2rem;
  }
`;

export default StyledUsersList;
