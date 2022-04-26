import React from 'react';
import Container from '../../../../components/Container/Container';
import strings from '../../../../constants/strings';
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
            title={strings.labels.companyName}
            className="icon icon-logo"
            clicked={showMenu}
          ></StyledLogo>
          <StyledMenuButton clicked={showMenu} onClick={handleClickMenu}>
            {strings.labels.menu}
          </StyledMenuButton>
        </nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
