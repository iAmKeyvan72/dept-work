import React from 'react';
import { StyledSidebar, StyledSidebarContainer } from './style';
import PageNavigationLinks from './Partials/PageNavigationLinks/PageNavigationLinks';
import SidebarSocials from './Partials/SidebarSocials/SidebarSocials';

const Sidebar = () => {
  return (
    <StyledSidebar>
      <StyledSidebarContainer>
        <PageNavigationLinks />
        <SidebarSocials />
      </StyledSidebarContainer>
    </StyledSidebar>
  );
};

export default Sidebar;
