import styled from 'styled-components';

const IconContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export default IconContainer;
