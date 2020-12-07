import styled, { css } from 'styled-components';
import { ChatItemProps } from './../components/ChatItem';

const StyledChatItem = styled.div`
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  align-items: center;
  width: calc(100% - 3rem);
  height: 7rem;
  cursor: pointer;
  padding: 0 1.5rem;
  background: ${({ theme }) => theme.color.background_default};

  &:hover {
    background: ${({ theme }) => theme.color.hover};
  }

  ${(props: ChatItemProps) =>
    props.active &&
    css`
      background: ${({ theme }) => theme.color.background_active};
    `}

  .chat--contentContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 1.5rem;
    border-bottom: ${({ theme }) => '0.05rem solid ' + theme.color.border_list};
    width: 85%;
    margin-bottom: 1px;
    height: 100%;
  }

  .content--line1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    line-height: normal;
    margin-bottom: 0.3rem;
  }

  .content--line1__title {
    color: ${({ theme }) => theme.color.primary_strong};
    font-size: 1.6rem;
    text-align: left;
  }

  .content--line1__date {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.color.secondary};
    text-align: right;
    margin-top: 0.3rem;
    margin-left: 0.6rem;
  }

  .content--message {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.color.secondary};
    overflow: hidden;
    white-space: nowrap;
  }

  .chat--badge {
    background: ${({ theme }) => theme.color.chat_badge};
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    text-align: right;
    margin-left: 2rem;
  }
`;

export default StyledChatItem;
