import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { StyledPageNavigationLinks } from './style';

const links = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Werk',
    url: '/werk',
  },
  {
    name: 'Over',
    url: '/over',
  },
  {
    name: 'Diensten',
    url: '/diensten',
  },
  {
    name: 'Partners',
    url: '/partners',
  },
  {
    name: 'Stories',
    url: '/stories',
  },
  {
    name: 'Vacatures',
    url: '/vacatures',
  },
  {
    name: 'Events',
    url: '/events',
  },

  {
    name: 'Contact',
    url: '/contact',
  },
];

const PageNavigationLinks = () => {
  return (
    <div>
      <StyledPageNavigationLinks>
        {links.map((link) => (
          <li key={link.name}>
            <NavLink to={link.url}>{link.name}</NavLink>
          </li>
        ))}
      </StyledPageNavigationLinks>
    </div>
  );
};

export default PageNavigationLinks;
