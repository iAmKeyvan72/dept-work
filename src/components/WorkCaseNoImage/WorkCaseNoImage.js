import React from 'react';
import { StyledWorkCaseNoImage } from './style';
import Button from '../Button/Button';

const WorkCaseNoImage = ({ companyName, companyUrl, title }) => (
  <StyledWorkCaseNoImage>
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
      view case
    </Button>
  </StyledWorkCaseNoImage>
);

export default WorkCaseNoImage;
