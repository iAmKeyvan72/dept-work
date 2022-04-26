import React from 'react';
import strings from '../../constants/strings';
import { StyledWorkCaseNoItemFound } from './style';

const WorkCaseNoItemFound = () => (
  <StyledWorkCaseNoItemFound>
    <h4>{strings.sections.noItem.title}</h4>
    <p>{strings.sections.noItem.description}</p>
  </StyledWorkCaseNoItemFound>
);

export default WorkCaseNoItemFound;
