import React from 'react';
import { StyledFooterInfo, StyledFreeSpace } from './style';

const FooterInfo = () => {
  return (
    <StyledFooterInfo>
      <StyledFreeSpace />
      <ul>
        <li>Chamber of Commerce: 63464101</li>
        <li>VAT: NL 8552.47.502.B01</li>
        <li>
          <a href="#" title="Terms and conditions">
            Terms and conditions
          </a>
        </li>
      </ul>
      <p className="copyright">© 2018 Dept Agency</p>
    </StyledFooterInfo>
  );
};

export default FooterInfo;
