import React from 'react';
import {
  StyledContactUsSection,
  StyledContactUsContainer,
  StyledContactSectionTitle,
} from './style';

import ContactForm from './Partials/ContactForm/ContactForm';
import strings from '../../../../constants/strings';

const ContactUs = () => (
  <StyledContactUsSection>
    <StyledContactUsContainer>
      <StyledContactSectionTitle>
        {strings.sections.contactUs.title}
      </StyledContactSectionTitle>
      <ContactForm />
    </StyledContactUsContainer>
  </StyledContactUsSection>
);

export default ContactUs;
