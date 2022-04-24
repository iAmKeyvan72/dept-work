import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
`;

export const StyledFooterWrapper = styled.div`
  background-color: var(--text-900);
  color: var(--background-main);
  padding: 2rem 0;
  flex: 1;

  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`;

export const StyledFooterContents = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledFooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  border-bottom: 1px solid #3e3e3e;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;
