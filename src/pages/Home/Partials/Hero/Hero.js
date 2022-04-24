import React from 'react';
import { connect } from 'react-redux';
import Button from '../../../../components/Button/Button';
import Container from '../../../../components/Container/Container';
import { getHero } from '../../../../ducks/home/selectors';
import {
  StyledHero,
  StyledHeroButtonContainer,
  StyledHeroContainer,
  StyledHeroTitle,
} from './style';

const Hero = ({ image, title, url }) => {
  return (
    <StyledHero background={image}>
      <StyledHeroContainer>
        <StyledHeroTitle>{title}</StyledHeroTitle>
        <StyledHeroButtonContainer>
          <Button element="a" href={url} uiType="secondary">
            view case
          </Button>
        </StyledHeroButtonContainer>
      </StyledHeroContainer>
    </StyledHero>
  );
};

const mapStateToProps = (state) => ({
  image: getHero(state).image,
  title: getHero(state).title,
  url: getHero(state).url,
});

export default connect(mapStateToProps)(Hero);
