import styled from 'styled-components';

export const StyledGotToTop = styled.button`
  display: none;

  @media (min-width: 768px) {
    background: var(--background-main);
    border: none;
    color: var(--primary);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: Teko;
    font-size: 1.5rem;
    line-height: 1;
    text-transform: uppercase;
    min-width: 6rem;

    &::before {
      content: '↑';
      font-size: 2.5rem;
    }
  }
`;
