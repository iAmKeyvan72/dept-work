import React from 'react';
import Button from '../../../../components/Button/Button';
import { StyledHero } from './style';

const Hero = ({ image, title, url }) => {
  return (
    <StyledHero background={image}>
      <h1>{title}</h1>
      <div className="heroBtnContainer">
        <Button href={url} type="secondary">
          view case
        </Button>
      </div>
    </StyledHero>
  );
};

export default Hero;
