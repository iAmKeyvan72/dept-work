import styled from 'styled-components';

const buttonStyle = `
  color: #fff;
  padding: 1rem 3rem;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const primaryStyle = `
  ${buttonStyle}
  background-color: var(--primary);
  color: var(--background-main);
`;

const secondaryStyle = `
  ${buttonStyle}
  background-color: var(--secondary);
  color: var(--background-main);
`;

const inlineStyle = `
  color: var(--primary);
  text-decoration: none;
  font-size: 1.25rem;
  &::before {
    font-size: 0.75rem;
    content: '▶';
    margin-right: 5px;
  }
`;

export const StyledButton = styled.button(buttonStyle);
export const StyledAnchor = styled.a(buttonStyle);

export const StyledPrimaryButton = styled(StyledButton)`
  ${primaryStyle}
`;
export const StyledSecondaryButton = styled(StyledButton)`
  ${secondaryStyle}
`;

export const StyledPrimaryLinkButton = StyledPrimaryButton.withComponent('a');
export const StyledSecondaryLinkButton =
  StyledSecondaryButton.withComponent('a');

export const StyledLinkButton = styled.a`
  ${inlineStyle}
`;
