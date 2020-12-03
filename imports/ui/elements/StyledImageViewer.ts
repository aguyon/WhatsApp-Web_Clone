import styled from 'styled-components';

const StyledImageViewer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .IV--infos {
    padding: 2rem 5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${({ theme }) => theme.bigOverlay.color.username};
    font-size: 2rem;

    span {
      padding-left: 1.5rem;
    }
  }

  .IV--icon {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.bigOverlay.color.icon};
    cursor: pointer;
    margin-left: auto;
  }

  .IV--imageContainer {
    width: 55rem;
    height: 55rem;
    margin: auto;
  }

  .IV--image {
    width: 100%;
    height: 100%;
  }
`;

export default StyledImageViewer;
