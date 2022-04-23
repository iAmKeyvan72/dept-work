import React from 'react';
import { StyledTestimonial } from './style';

const Testimonial = ({
  id,
  message,
  authorName,
  authorPosition,
  authorCompany,
}) => {
  return (
    <StyledTestimonial>
      <figure>
        <blockquote className="quoteMessage">{message}</blockquote>
        <figcaption className="quoteAuthorContainer">
          <span className="quoteAuthorName">{authorName}</span> -{' '}
          <span className="quoteAuthorPosition">{authorPosition}</span>,{' '}
          <span className="quoteAuthorCompany">{authorCompany}</span>
        </figcaption>
      </figure>
    </StyledTestimonial>
  );
};

export default Testimonial;
