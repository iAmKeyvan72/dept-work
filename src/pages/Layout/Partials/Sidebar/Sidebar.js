import React, { useEffect } from 'react';
import { StyledSidebar, StyledSidebarContainer } from './style';
import PageNavigationLinks from './Partials/PageNavigationLinks/PageNavigationLinks';
import SidebarSocials from './Partials/SidebarSocials/SidebarSocials';
import SidebarLocationsList from './Partials/SidebarLocationsList/SidebarLocationsList';

const Sidebar = ({ show, toggleMenu }) => {
  useEffect(() => {
    show && (document.body.style.overflow = 'hidden');
    !show && (document.body.style.overflow = 'unset');
  }, [show]);

  return (
    <StyledSidebar clicked={show}>
      <StyledSidebarContainer>
        <SidebarLocationsList />
        <PageNavigationLinks toggleMenu={toggleMenu} />
        <SidebarSocials />
      </StyledSidebarContainer>
    </StyledSidebar>
  );
};

export default Sidebar;
