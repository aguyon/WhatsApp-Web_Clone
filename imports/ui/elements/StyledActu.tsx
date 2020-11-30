import styled from 'styled-components';

const StyledActu = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 3rem);
  /* height: calc(13.4rem - 1.4rem); */
  height: auto;
  background: ${({ theme }) => theme.otherProfile.color.item};
  padding-left: 3rem;
  padding-top: 1.4rem;
  margin-bottom: 1rem;

  .actu--title {
    color: #128c7e;
    font-size: 1.4rem;
    margin-bottom: 1.9rem;
    font-weight: 500;
  }

  .actu--content {
    font-size: 1.6rem;
    margin-bottom: 1.9rem;
    font-weight: 500;
    color: ${({ theme }) => theme.otherProfile.color.content};
  }

  .actu--divider {
    width: 100%;
    height: 0.1rem;
    background: ${({ theme }) => theme.otherProfile.color.divider};
    margin-bottom: 1.9rem;
  }

  .actu--phone {
    font-size: 1.6rem;
    margin-bottom: 1.9rem;
    color: ${({ theme }) => theme.otherProfile.color.content};
  }
`;

export default StyledActu;
