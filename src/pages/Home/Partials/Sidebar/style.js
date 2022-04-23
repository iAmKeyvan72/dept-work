import styled from 'styled-components';

import { StyledContainer } from '../../../../components/Container/style';

export const StyledSidebar = styled.aside`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 9;
  height: calc(100vh - 2rem);
  background-color: var(--text-900);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    align-items: flex-end;
    margin: 1rem;
  }
`;

export const StyledSidebarContainer = styled(StyledContainer)`
  flex: 1;

  @media (min-width: 768px) {
    padding-bottom: 2rem;
  }
`;
