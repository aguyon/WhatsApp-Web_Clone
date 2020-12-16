import styled from 'styled-components';

const StyledSplashScreen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.color.background_loading_app};

  .loader--image {
    position: absolute;
    transform: translateY(-140px);
    border-radius: 50%;
    width: 300px;
    height: 300px;
  }

  .loader--message {
    position: absolute;
    transform: translateY(60px);
    color: ${({ theme }) => theme.color.primary};
    font-weight: 300;
    font-size: 2.8rem;
  }
`;

export default StyledSplashScreen;
