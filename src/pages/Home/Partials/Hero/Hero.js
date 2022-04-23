import React from 'react';
import Button from '../../../../components/Button/Button';
import {
  StyledHero,
  StyledHeroButtonContainer,
  StyledHeroTitle,
} from './style';

const Hero = ({ image, title, url }) => {
  return (
    <StyledHero background={image}>
      <StyledHeroTitle>{title}</StyledHeroTitle>
      <StyledHeroButtonContainer>
        <Button element="a" href={url} uiType="secondary">
          view case
        </Button>
      </StyledHeroButtonContainer>
    </StyledHero>
  );
};

export default Hero;
