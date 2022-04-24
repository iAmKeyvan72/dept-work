import React from 'react';

import { StyledFooterSiteLinks } from './style';

const links = [
  {
    name: 'Work',
    url: '/',
  },
  {
    name: 'Services',
    url: '/services',
  },
  {
    name: 'Stories',
    url: '/stories',
  },
  {
    name: 'About',
    url: '/about',
  },
  {
    name: 'Careers',
    url: '/careers',
  },
  {
    name: 'Contact',
    url: '/contact',
  },
];

const FooterSiteLinks = () => {
  return (
    <StyledFooterSiteLinks>
      {links.map((link, index) => (
        <li key={link.name + index}>
          <a href={link.url} title={link.name}>
            {link.name}
          </a>
        </li>
      ))}
    </StyledFooterSiteLinks>
  );
};

export default FooterSiteLinks;
