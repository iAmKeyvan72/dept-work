import React from 'react';
import { StyledSocialLinks } from './style';

const socials = {
  fb: 'https://fb.com/dept',
  twitter: 'https://twitter.com/dept',
  instagram: 'https://instagram.com/dept',
};

const SocialLinks = () => {
  return (
    <StyledSocialLinks>
      {Object.keys(socials).map((key, index) => (
        <li key={key + index}>
          <a href={socials[key]} title={key}>
            <i className={`icon icon-${key}`} />
          </a>
        </li>
      ))}
    </StyledSocialLinks>
  );
};

export default SocialLinks;
