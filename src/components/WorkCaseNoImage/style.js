import styled from 'styled-components';

export const StyledWorkCaseNoImageListItem = styled.li`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    margin: 0 2rem;
    flex: 1;
  }
`;

export const StyledWorkCaseNoImage = styled.div`
  padding: 1rem 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  display: flex;
  flex-direction: column;

  .companyName {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 0.8rem;
    color: var(--lightSecondary);
    padding: 0.5rem 0;
    display: block;
  }
  h2 {
    font-size: 1.3rem;
  }
`;
