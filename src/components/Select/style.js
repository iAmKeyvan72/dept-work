import styled from 'styled-components';

export const StyledSelect = styled.div`
  margin-bottom: 1rem;
  position: relative;

  &:after {
    content: '▼';
    position: absolute;
    right: 0;
    top: 5px;
  }

  label {
    margin-right: 3px;
    font-size: 1.2rem;
    color: var(--lightSecondary);
  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    background-color: transparent;
    border: none;
    border-bottom: 1px solid var(--secondary);
    font-family: Teko;
    font-size: 1.2rem;
    color: var(--text-900);
    padding-right: 15px;

    &::-ms-expand {
      display: none;
    }
  }
  @media (min-width: 768px) {
    margin: 1rem 0 1rem 1rem;
  }
`;
