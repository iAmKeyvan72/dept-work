import React from 'react';
import Container from '../../../../components/Container/Container';
import { StyledHeader, StyledLogo, StyledMenuButton } from './style';

const Header = ({ showMenu, toggleSidebar }) => {
  const handleClickMenu = () => {
    toggleSidebar();
  };

  return (
    <StyledHeader clicked={showMenu}>
      <Container>
        <nav>
          <StyledLogo
            href="/"
            title="Dept"
            className="icon icon-logo"
            clicked={showMenu}
          ></StyledLogo>
          <StyledMenuButton clicked={showMenu} onClick={handleClickMenu}>
            Menu
          </StyledMenuButton>
        </nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
