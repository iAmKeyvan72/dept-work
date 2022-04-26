import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledFiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  align-items: flex-start;

  @media (min-width: 768px) {
    margin-right: 2rem;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const StyledListSection = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-flow: row wrap;
  }
`;
