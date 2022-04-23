import styled from 'styled-components';

export const StyledFooterSiteLinks = styled.ul`
  a {
    font-size: 2rem;
  }

  @media (min-width: 768px) {
    display: flex;
    flex: 5;

    a {
      font-size: 1.2rem;
      margin-right: 1rem;
    }
  }
`;
