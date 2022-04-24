import styled from 'styled-components';
import { StyledContainer } from '../../../../components/Container/style';

export const StyledHero = styled.section`
  background-image: ${(props) => `url(${props.background})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 50vh;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    border: 1rem solid var(--background-main);
    height: 90vh;
    position: relative;
  }
`;

export const StyledHeroContainer = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 100%;
  height: 100%;
`;

export const StyledHeroTitle = styled.h1`
  text-transform: uppercase;
  font-size: 10rem;
  width: 90%;
  margin: auto 0;
  margin-left: 2rem;
  line-height: 1;

  @media (min-width: 768px) {
    margin: auto 0;
    font-size: 15rem;
  }
  @media (min-width: 1024px) {
    font-size: 25rem;
  }
`;

export const StyledHeroButtonContainer = styled.div`
  background-color: var(--background-main);
  padding: 1rem 0;
  a {
    margin: 10px 5%;
  }

  @media (min-width: 768px) {
    background-color: transparent;
    display: flex;
    a {
      margin: 10px auto;
      position: absolute;
      right: 2rem;
      bottom: 3rem;
    }
  }
`;
