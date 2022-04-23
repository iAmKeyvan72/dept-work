import React from 'react';
import { StyledClientLogo } from './style';

const ClientLogo = ({ image, url, name }) => {
  return (
    <StyledClientLogo href={url} title={name}>
      <img src={image} alt={name} />
    </StyledClientLogo>
  );
};

export default ClientLogo;
