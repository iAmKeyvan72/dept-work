import styled from 'styled-components';

import { StyledContainer } from '../../../../components/Container/style';

export const StyledSidebar = styled.aside`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background-color: var(--text-900);
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => (props.clicked ? '100vh' : '0')};
  overflow: ${(props) => (props.clicked ? 'auto' : 'hidden')};
  transition: all 0.3s ease-in-out;

  @media (min-width: 768px) {
    border: ${(props) => (props.clicked ? '1rem' : '0')} solid
      var(--background-main);
    align-items: flex-end;
    height: ${(props) => (props.clicked ? 'calc(100vh - 2rem)' : '0')};
  }
`;

export const StyledSidebarContainer = styled(StyledContainer)`
  flex: 1;

  @media (min-width: 768px) {
    padding-bottom: 2rem;
  }
`;
