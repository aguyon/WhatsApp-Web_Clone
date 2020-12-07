import styled from 'styled-components';

const StyledChatList = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.color.background_default};
  width: 100%;
  height: 82%;
  overflow-y: auto;
  position: relative;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.color.scrollbar_track_background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.scrollbar_thumb_background};
    border-radius: 0.2rem;
  }
`;

export default StyledChatList;
