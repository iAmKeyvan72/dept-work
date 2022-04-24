import React from 'react';
import { StyledSidebarSocials } from './style';

const socials = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/',
  },
  {
    name: 'Twitter',
    url: 'https://www.twitter.com/',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/',
  },
];

const SidebarSocials = () => {
  return (
    <StyledSidebarSocials>
      {socials.map((social) => (
        <li key={social.url}>
          <a href={social.url} title={social.name}>
            {social.name}
          </a>
        </li>
      ))}
    </StyledSidebarSocials>
  );
};

export default SidebarSocials;
