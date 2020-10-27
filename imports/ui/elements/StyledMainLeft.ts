import styled from 'styled-components';

const StyledMainLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  height: 100%;
  border-right: ${({ theme }) => '0.1rem solid ' + theme.left.color.borderRight};
`;

export default StyledMainLeft;
