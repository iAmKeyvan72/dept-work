import React from 'react';
import strings from '../../../../../../constants/strings';
import { StyledFooterLogo } from './style';

const FooterLogo = () => {
  return (
    <StyledFooterLogo
      href="/"
      title={strings.labels.companyName}
      className="onlyDesktop"
    >
      <i className="icon icon-logo"></i>
    </StyledFooterLogo>
  );
};

export default FooterLogo;
