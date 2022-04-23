import styled from 'styled-components';

export const StyledFiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  align-items: flex-start;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const StyledListSection = styled.ul`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-flow: row wrap;
  }
`;