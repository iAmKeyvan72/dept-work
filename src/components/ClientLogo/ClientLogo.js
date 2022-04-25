import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { StyledClientLogo } from './style';

const ClientLogo = ({ image, url, name }) => {
  return (
    <StyledClientLogo href={url} title={name}>
      <LazyLoadImage src={image} alt={name} effect="blur" threshold={75} />
    </StyledClientLogo>
  );
};

export default ClientLogo;
