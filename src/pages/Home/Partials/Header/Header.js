import React from 'react';
import Container from '../../../../components/Container/Container';
import { StyledHeader, StyledLogo, StyledMenuButton } from './style';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <nav>
          <StyledLogo href="#" title="/">
            <i className="icon icon-logo"></i>
          </StyledLogo>
          <StyledMenuButton className="openMenu">
            Menu<i className="icon icon-menu"></i>
          </StyledMenuButton>
        </nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
