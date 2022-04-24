import styled from 'styled-components';
import Slider from 'react-slick';

export const StyledClientsSection = styled.section`
  background-color: var(--background-lightBlue);
  text-align: center;
  padding: 2rem 0;
  margin-top: 5rem;
`;

export const StyledClientsSlider = styled(Slider)`
  .slick-slide.slide-active {
    display: flex;
    align-items: center;
  }
`;

export const StyledClientSectionDescription = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  @media (min-width: 768px) {
    max-width: 600px;
    margin: 1rem auto 3rem;
  }
`;
