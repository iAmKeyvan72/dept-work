import React from 'react';
import strings from '../../../../../../constants/strings';
import { StyledGotToTop } from './style';

const GoToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <StyledGotToTop onClick={scrollToTop}>{strings.labels.top}</StyledGotToTop>
  );
};

export default GoToTop;
