import React from 'react';
import {
  StyledContactUsSection,
  StyledContactUsContainer,
  StyledContactSectionTitle,
} from './style';

import ContactForm from './Partials/ContactForm/ContactForm';

const ContactUs = () => (
  <StyledContactUsSection>
    <StyledContactUsContainer>
      <StyledContactSectionTitle>
        questions? we are here to help!
      </StyledContactSectionTitle>
      <ContactForm />
    </StyledContactUsContainer>
  </StyledContactUsSection>
);

export default ContactUs;
