import React from 'react';
import WorkCaseNoImage from '../WorkCaseNoImage/WorkCaseNoImage';
import { StyledWorkCaseNoImageList } from './style';

const WorkCaseNoImageList = ({ data }) => (
  <StyledWorkCaseNoImageList>
    {data.map((work) => (
      <WorkCaseNoImage key={work.id} {...work} />
    ))}
  </StyledWorkCaseNoImageList>
);

export default WorkCaseNoImageList;
