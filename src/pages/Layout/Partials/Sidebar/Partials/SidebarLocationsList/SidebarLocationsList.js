import React from 'react';
import { Link } from 'react-router-dom';
import { StyledSidebarLocationsListWrapper } from './style';

const locations = [
  { title: 'global', url: '/gl' },
  { title: 'nederland', url: '/nl' },
  { title: 'united states', url: '/us' },
  { title: 'ireland', url: '/ie' },
  { title: 'united kingdom', url: '/uk' },
  { title: 'deutschland', url: '/gr' },
  { title: 'schweiz', url: '/sch' },
];

const SidebarLocationsList = () => {
  return (
    <StyledSidebarLocationsListWrapper>
      <h6>landen</h6>
      <ul>
        {locations.map((location, index) => (
          <li key={location.title + index}>
            <Link
              to={location.url}
              title={location.title}
              className={location.url === '/nl' ? 'active' : null}
            >
              {location.title}
            </Link>
          </li>
        ))}
      </ul>
    </StyledSidebarLocationsListWrapper>
  );
};

export default SidebarLocationsList;
