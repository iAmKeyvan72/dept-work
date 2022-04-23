import styled from 'styled-components';
import { StyledInputText } from '../../../../../../components/InputText/style';

export const StyledContactForm = styled.form`
  @media (min-width: 768px) {
    flex: 2;
  }
`;

export const StyledInputsWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;

    ${StyledInputText} {
      flex: 1 calc(50% - 2rem);
    }
  }
`;
