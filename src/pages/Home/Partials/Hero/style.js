import styled from 'styled-components';

export const StyledHero = styled.section`
  background-image: ${(props) => `url(${props.background})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  h1 {
    text-transform: uppercase;
    font-size: 10rem;
    width: 90%;
    margin: auto;
  }
  .heroBtnContainer {
    background-color: var(--background-main);
    padding: 1rem 0;
    a {
      margin: 10px 5%;
    }
  }

  @media (min-width: 768px) {
    margin: 1rem;
    min-height: 70vh;
    position: relative;
    padding-top: 3rem;
    .heroBtnContainer {
      background-color: transparent;
      display: flex;
      a {
        margin: 10px auto;
        position: absolute;
        right: 5%;
        bottom: 10px;
      }
    }

    h1 {
      font-size: 15rem;
    }
  }
  @media (min-width: 1024px) {
    h1 {
      font-size: 25rem;
    }
  }
`;
