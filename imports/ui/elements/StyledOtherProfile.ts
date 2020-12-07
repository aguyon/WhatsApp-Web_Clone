import styled from 'styled-components';

const StyledOtherProfile = styled.div`
  width: 35%;
  height: 100%;
  background: ${({ theme }) => theme.color.drawer_background};
  display: flex;
  flex-direction: column;
  z-index: 1;
  border-left: ${({ theme }) => '0.1rem solid ' + theme.color.border};

  // .__scroll {
  //   overflow-y: scroll;
  //   &::-webkit-scrollbar {
  //     width: 0.5rem;
  //   }

  //   ::-webkit-scrollbar-track {
  //     background: transparent;
  //   }

  //   ::-webkit-scrollbar-thumb {
  //     background: #888;
  //     border-radius: 0.2rem;
  //   }

  //   ::-webkit-scrollbar-thumb:hover {
  //     background: #555;
  //   }
  // }

  .OPH--heading {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0 0.9rem;
  }

  .iconOtherProfile {
    font-size: 2.4rem;
    margin-right: 3rem;
    color: #929fa6;
    cursor: pointer;
  }

  .OPH--title {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.color.primary_strong};
  }

  .OP--imageContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: calc(100% - 5.6rem);
    height: calc(31.8rem - 5.6rem);
    padding: 2.8rem;
    padding-bottom: 1.7rem;
    background: ${({ theme }) => theme.color.drawer_section_background};
    margin-bottom: 1rem;
  }

  .OP--image {
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 2rem;
  }

  .OPIC--textContainer {
    text-align: left;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 1rem;
  }

  .OPIC--title {
    color: ${({ theme }) => theme.color.primary_strong};
    font-size: 1.9rem;
    margin-bottom: 0.7rem;
  }

  .OPIC--subTitle {
    color: ${({ theme }) => theme.color.secondary_lighter};
    font-size: 1.4rem;
  }
`;

export default StyledOtherProfile;
