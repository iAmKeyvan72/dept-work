import React from 'react';
import { StyledHeader, StyledLogo, StyledMenuButton } from './style';

const Header = () => {
  return (
    <StyledHeader>
      <nav className="container">
        <StyledLogo href="#" title="/">
          <i className="icon icon-logo"></i>
        </StyledLogo>
        <StyledMenuButton className="openMenu">
          Menu<i className="icon icon-menu"></i>
        </StyledMenuButton>
      </nav>
    </StyledHeader>
  );
};

export default Header;
