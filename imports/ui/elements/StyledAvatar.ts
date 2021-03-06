import styled, { css } from 'styled-components';
import { AvatarProps } from './../components/Avatar';

const StyledAvatar = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.color.status_notification_icon};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${(props: AvatarProps) =>
    props.md &&
    css`
      width: 4.9rem;
      height: 4.9rem;
      border-radius: 2.45rem;
    `}

  ${(props: AvatarProps) =>
    props.large &&
    css`
      width: 9.6rem;
      height: 9.6rem;
      border-radius: 50%;
    `}

  ${(props: AvatarProps) =>
    props.big &&
    css`
      width: 20rem;
      height: 20rem;
      border-radius: 50%;
    `}

  .avatar--img {
    width: 100%;
    height: 100%;
  }

  .avatar--overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(50, 55, 57, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    font-size: 2.4rem;
  }

  .overlay--icon {
    margin-bottom: 1.3rem;
  }

  .overlay--text {
    font-size: 1.4rem;
    text-align: center;
    width: 50%;
    text-transform: uppercase;
  }

  input[type='file'] {
    display: none;
  }
`;

export default StyledAvatar;
