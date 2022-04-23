import React from 'react';
import {
  StyledContactForm,
  StyledContactUsSection,
  StyledContainer,
  StyledSectionTitle,
} from './style';

const ContactUs = () => {
  return (
    <StyledContactUsSection>
      <StyledContainer>
        <StyledSectionTitle title="questions? we are here to help!" />
        <StyledContactForm />
      </StyledContainer>
    </StyledContactUsSection>
  );
};

export default ContactUs;
