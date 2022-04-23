import styled from 'styled-components';

export const StyledInputText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;

  label {
    font-weight: bold;
  }

  input,
  textarea {
    padding: 10px;
    border: none;
    border-bottom: 2px solid var(--border);
    resize: vertical;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 10px;
  }
`;

export const StyledInputError = styled.p`
  color: var(--error);
  font-family: Arial, Helvetica, sans-serif;
  font-weight: normal;
  font-size: 0.7rem;
`;
