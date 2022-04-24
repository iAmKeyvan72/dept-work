import styled from 'styled-components';

export const StyledSidebarLocationsListWrapper = styled.ul`
  display: none;

  @media (min-width: 768px) {
    position: absolute;
    top: 0;
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

    h6 {
      text-transform: uppercase;
      opacity: 0.5;
    }

    li {
      a {
        text-transform: uppercase;

        &.active {
          &::before {
            font-size: 0.75rem;
            content: '▶';
            margin-right: 5px;
          }
        }
      }
    }
  }
`;
