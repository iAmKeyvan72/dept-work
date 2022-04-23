import styled from 'styled-components';

export const StyledPageNavigationLinks = styled.ul`
  display: flex;
  flex-direction: column;
  color: var(--background-main);

  li {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    &:not(:last-child) {
      border-bottom: 1px solid #a3a3a3;
    }

    a {
      font-size: 2.5rem;
      line-height: 1.2;
      text-transform: uppercase;

      &.active {
        &:before {
          content: '▶';
          font-size: 1.5rem;
          vertical-align: middle;
          margin-right: 0.5rem;
        }
      }
    }
  }

  @media (min-width: 768px) {
    li {
      a {
        font-size: 7rem;
        &.active {
          &:before {
            font-size: 2.5rem;
          }
        }
      }
    }
  }
`;

export const StyledNavLink = styled.li``;
