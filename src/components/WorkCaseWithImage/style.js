import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledWorkCaseWithImageListItem = styled(motion.li)`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    flex: 2 50%;
  }
`;

export const StyledWorkCaseWithImage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem auto;

  span {
    width: 100%;

    img {
      width: 100%;
    }
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
    font-size: 2rem;
    line-height: 1;
  }
  @media (min-width: 768px) {
    margin: 2rem;
  }
`;
