import React from 'react';
import { Link } from 'react-router-dom';
import strings from '../../../../../../constants/strings';
import { StyledSidebarLocationsListWrapper } from './style';

const locations = [
  { title: strings.locations.gl, url: '/gl' },
  { title: strings.locations.nl, url: '/nl' },
  { title: strings.locations.us, url: '/us' },
  { title: strings.locations.ie, url: '/ie' },
  { title: strings.locations.uk, url: '/uk' },
  { title: strings.locations.de, url: '/de' },
  { title: strings.locations.sw, url: '/sw' },
];

const SidebarLocationsList = () => {
  return (
    <StyledSidebarLocationsListWrapper>
      <h6>{strings.locations.title}</h6>
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
