import styled from 'styled-components';

export const StyledFooterInfo = styled.div`
  margin-top: 2rem;
  color: #808080;
  font-family: Arial;
  font-size: 0.75rem;

  .copyright {
    margin-top: 1rem;
  }

  @media (min-width: 768px) {
    display: flex;
    gap: 3rem;
    align-items: center;

    ul {
      display: flex;
      flex: 10;
      gap: 1rem;
    }

    .copyright {
      margin: 0;
      text-align: right;
      flex: 2;
    }
  }
`;

export const StyledFreeSpace = styled.div`
  @media (min-width: 768px) {
    flex: 1;
  }
`;
