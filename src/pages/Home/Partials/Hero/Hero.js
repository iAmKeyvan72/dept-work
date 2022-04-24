import React from 'react';
import { connect } from 'react-redux';
import Button from '../../../../components/Button/Button';
import { getHero } from '../../../../ducks/home/selectors';
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

const mapStateToProps = (state) => ({
  image: getHero(state).image,
  title: getHero(state).title,
  url: getHero(state).url,
});

export default connect(mapStateToProps)(Hero);
