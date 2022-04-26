import React from 'react';
import strings from '../../../../../../constants/strings';

import { StyledFooterSiteLinks } from './style';

const links = [
  {
    name: strings.menu.work,
    url: '/',
  },
  {
    name: strings.menu.services,
    url: '/services',
  },
  {
    name: strings.menu.stories,
    url: '/stories',
  },
  {
    name: strings.menu.about,
    url: '/about',
  },
  {
    name: strings.menu.careers,
    url: '/careers',
  },
  {
    name: strings.menu.contact,
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
