import styled from 'styled-components';
import ContactForm from './Partials/ContactForm/ContactForm';
import Container from '../../../../components/Container/Container';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';

export const StyledContactUsSection = styled.section`
  padding: 2rem 0;
`;

export const StyledContainer = styled(Container)`
  && {
    @media (min-width: 768px) {
      display: flex;
    }
  }
`;

export const StyledContactForm = styled(ContactForm)`
  @media (min-width: 768px) {
    flex: 2;
  }
`;

export const StyledSectionTitle = styled(SectionTitle)`
  @media (min-width: 768px) {
    flex: 1;
    text-align: left;
    padding: 1rem 3rem 0 0;
  }
`;
