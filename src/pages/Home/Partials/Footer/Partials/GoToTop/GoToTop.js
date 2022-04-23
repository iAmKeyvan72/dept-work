import React from 'react';
import { StyledGotToTop } from './style';

const GoToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return <StyledGotToTop onClick={scrollToTop}>TOP</StyledGotToTop>;
};

export default GoToTop;
