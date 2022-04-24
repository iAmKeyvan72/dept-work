import styled from 'styled-components';

export const StyledSidebarSocials = styled.ul`
  display: none;

  @media (min-width: 768px) {
    position: absolute;
    bottom: 2rem;
    left: 0;
    display: flex;
    flex-direction: column;
    color: var(--background-main);
    background-color: var(--text-900);
    padding: 1rem;
    font-family: Arial;
    font-weight: bold;
    font-size: 1rem;
    z-index: 1;
    text-transform: uppercase;
  }
`;
