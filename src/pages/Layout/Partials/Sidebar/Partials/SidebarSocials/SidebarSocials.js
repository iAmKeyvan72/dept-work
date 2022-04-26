import React from 'react';
import strings from '../../../../../../constants/strings';
import { StyledSidebarSocials } from './style';

const socials = [
  {
    name: strings.socials.fb,
    url: 'https://www.facebook.com/',
  },
  {
    name: strings.socials.instagram,
    url: 'https://www.instagram.com/',
  },
  {
    name: strings.socials.twitter,
    url: 'https://www.twitter.com/',
  },
  {
    name: strings.socials.linkedin,
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
