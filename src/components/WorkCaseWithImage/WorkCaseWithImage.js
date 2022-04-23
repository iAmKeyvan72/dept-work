import React from 'react';
import Button from '../Button/Button';
import {
  StyledWorkCaseWithImage,
  StyledWorkCaseWithImageListItem,
} from './style';

const WorkCaseWithImage = ({ image, companyName, companyUrl, title }) => {
  return (
    <StyledWorkCaseWithImageListItem>
      <StyledWorkCaseWithImage>
        <a href={`/${decodeURI(title)}`} title={title}>
          <img src={image} alt={title} />
        </a>
        <a href={companyUrl} title={companyName} className="companyName">
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
      </StyledWorkCaseWithImage>
    </StyledWorkCaseWithImageListItem>
  );
};

export default WorkCaseWithImage;
