import styled from 'styled-components';

import StyledChatItem from './StyledChatItem';

const StyledUserItem = styled(StyledChatItem)`
  .chat--contentContainer {
    border-bottom: none;
    position: relative;
  }
`;

export default StyledUserItem;
