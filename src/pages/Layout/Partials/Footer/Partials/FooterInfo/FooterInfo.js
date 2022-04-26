import React from 'react';
import strings from '../../../../../../constants/strings';
import { StyledFooterInfo, StyledFreeSpace } from './style';

const FooterInfo = () => {
  return (
    <StyledFooterInfo>
      <StyledFreeSpace />
      <ul>
        <li>{strings.labels.chamberOfCommerce}</li>
        <li>{strings.labels.vat}</li>
        <li>
          <a href="/terms" title={strings.labels.terms}>
            {strings.labels.terms}
          </a>
        </li>
      </ul>
      <p className="copyright">{strings.labels.copyright}</p>
    </StyledFooterInfo>
  );
};

export default FooterInfo;
