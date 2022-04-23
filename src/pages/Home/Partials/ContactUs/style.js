import styled from 'styled-components';
import { StyledContainer } from '../../../../components/Container/style';
import { StyledSectionTitle } from '../../../../components/SectionTitle/style';

export const StyledContactUsSection = styled.section`
  padding: 3rem 0;
  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`;

export const StyledContactUsContainer = styled(StyledContainer)`
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const StyledContactSectionTitle = styled(StyledSectionTitle)`
  @media (min-width: 768px) {
    flex: 1;
    text-align: left;
    padding: 1rem 3rem 0 0;
  }
`;
