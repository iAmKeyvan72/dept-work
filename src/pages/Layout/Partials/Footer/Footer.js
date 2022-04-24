import React from 'react';
import FooterSiteLinks from './Partials/FooterSiteLinks/FooterSiteLinks';
import SocialLinks from './Partials/SocialLinks/SocialLinks';
import {
  StyledFooter,
  StyledFooterContents,
  StyledFooterLinks,
  StyledFooterWrapper,
} from './style';
import Container from '../../../../components/Container/Container';
import GoToTop from './Partials/GoToTop/GoToTop';
import FooterLogo from './Partials/FooterLogo/FooterLogo';
import FooterInfo from './Partials/FooterInfo/FooterInfo';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterWrapper>
        <Container>
          <StyledFooterContents>
            <StyledFooterLinks>
              <FooterLogo />
              <FooterSiteLinks />
              <SocialLinks />
            </StyledFooterLinks>
            <FooterInfo />
          </StyledFooterContents>
        </Container>
      </StyledFooterWrapper>
      <GoToTop />
    </StyledFooter>
  );
};

export default Footer;
