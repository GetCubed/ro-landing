import styled from 'styled-components';

const IconLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: ${({ theme }) => theme.semantic.surface};
  border: 2px solid ${({ theme }) => theme.semantic.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.semantic.text};
  font-size: 1.5rem;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.semantic.primary};
    border-color: ${({ theme }) => theme.semantic.primary};
    color: ${({ theme }) => theme.semantic.background};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.semantic.primary};
    outline-offset: 2px;
  }

  &:active {
    transform: translateY(0);
  }
`;

export default IconLink;
