import styled from 'styled-components';

export const StyledTestimonial = styled.li`
  border-top: 1px solid var(--border);
  padding-top: 3rem;
  width: 100%;
  @media (min-width: 768px) {
    padding-bottom: 3rem;
    figure {
      max-width: 500px;
      margin: auto;
    }
  }

  blockquote {
    padding-bottom: 1rem;
    font-size: 1.2rem;
    @media (min-width: 768px) {
      font-size: 1.6rem;
    }
  }
  figcaption {
    font-family: 'Arial';
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75rem;
  }
`;
