import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: var(--background-main);

  @media (min-width: 768px) {
    background: transparent;
    position: relative;
    z-index: 1;
    margin-bottom: -5rem;
    padding: 1.5rem 0 0.5rem;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 0;

    @media (min-width: 768px) {
      border-bottom: 1px solid var(--secondary);
    }
  }
`;

export const StyledLogo = styled.a`
  display: flex;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const StyledMenuButton = styled.button`
  background: none;
  border: none;
  text-transform: uppercase;

  .icon {
    font-size: 0.5rem;
    margin-left: 5px;
    vertical-align: middle;
  }
`;
