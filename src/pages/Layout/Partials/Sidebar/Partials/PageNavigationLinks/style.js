import styled from 'styled-components';

export const StyledPageNavigationLinksWrapper = styled.div`
  display: flex;

  @media (min-width: 768px) {
    --mask-top-height: 2rem;
    --mask-bottom-height: 10rem;
    --mask-image-content: linear-gradient(
      to bottom,
      transparent,
      black var(--mask-top-height),
      black calc(100% - var(--mask-bottom-height)),
      transparent
    );
    --mask-size-content: 100% 100%;

    mask-image: var(--mask-image-content);
    mask-size: var(--mask-size-content);
    mask-position: 0 0, 100% 0;
    mask-repeat: no-repeat, no-repeat;
  }
`;

export const StyledPageNavigationLinks = styled.ul`
  display: flex;
  flex: 1;
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
    height: 80vh;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

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
