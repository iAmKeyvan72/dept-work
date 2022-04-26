import React from 'react';
import { NavLink } from 'react-router-dom';
import strings from '../../../../../../constants/strings';

import {
  StyledPageNavigationLinks,
  StyledPageNavigationLinksWrapper,
} from './style';

const links = [
  {
    name: strings.menu.home,
    url: '/',
  },
  {
    name: strings.menu.werk,
    url: '/werk',
  },
  {
    name: strings.menu.over,
    url: '/over',
  },
  {
    name: strings.menu.diensten,
    url: '/diensten',
  },
  {
    name: strings.menu.partners,
    url: '/partners',
  },
  {
    name: strings.menu.stories,
    url: '/stories',
  },
  {
    name: strings.menu.vacatures,
    url: '/vacatures',
  },
  {
    name: strings.menu.events,
    url: '/events',
  },
  {
    name: strings.menu.contact,
    url: '/contact',
  },
];

const PageNavigationLinks = ({ toggleMenu }) => {
  return (
    <StyledPageNavigationLinksWrapper>
      <StyledPageNavigationLinks>
        {links.map((link) => (
          <li key={link.name} onClick={() => toggleMenu()}>
            <NavLink to={link.url}>{link.name}</NavLink>
          </li>
        ))}
      </StyledPageNavigationLinks>
    </StyledPageNavigationLinksWrapper>
  );
};

export default PageNavigationLinks;
