import styled from 'styled-components';

export const StyledSocialLinks = styled.ul`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;
    i {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    flex: 2;
    justify-content: flex-end;

    li {
      margin-left: 2rem;
      a {
        margin-bottom: 0;
        i {
          font-size: 1.1rem;
        }
      }
    }
  }
`;
