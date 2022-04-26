import React from 'react';
import { StyledWorkCaseNoImage } from './style';
import Button from '../Button/Button';
import { workItemMotions } from '../../constants/motions';
import strings from '../../constants/strings';

const WorkCaseNoImage = ({ companyName, companyUrl, title }) => (
  <StyledWorkCaseNoImage
    variants={workItemMotions}
    initial="hidden"
    animate="visible"
    whileHover="hover"
  >
    <a href={companyUrl} className="companyName">
      {companyName}
    </a>
    <a href={`/${decodeURI(title)}`} className="workTitle" title={title}>
      <h2>{title}</h2>
    </a>
    <Button
      element="a"
      uiType="link"
      href={`/${decodeURI(title)}`}
      className="onlyDesktop"
    >
      {strings.labels.viewCase}
    </Button>
  </StyledWorkCaseNoImage>
);

export default WorkCaseNoImage;
