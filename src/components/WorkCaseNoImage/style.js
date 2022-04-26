import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledWorkCaseNoImage = styled(motion.div)`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--border);

  &:first-child {
    border-top: 1px solid var(--border);
  }

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
