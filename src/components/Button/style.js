import styled from 'styled-components';

export const StyledButton = styled.a`
  color: #fff;
  padding: 10px;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  border: none;
  display: block;
`;

export const StyledPrimaryButton = styled(StyledButton)`
  background-color: var(--primary);
  color: var(--background-main);
`;

export const StyledSecondaryButton = styled(StyledButton)`
  background-color: var(--secondary);
  color: var(--background-main);
`;

export const StyledLinkButton = styled.a`
  color: var(--primary);
  text-decoration: none;
  font-size: 1.25rem;
  &::before {
    font-size: 0.75rem;
    content: '▶';
    margin-right: 5px;
  }
`;
