import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { workItemMotions } from '../../constants/motions';
import strings from '../../constants/strings';
import Button from '../Button/Button';
import {
  StyledWorkCaseWithImage,
  StyledWorkCaseWithImageListItem,
} from './style';

const WorkCaseWithImage = ({ image, companyName, companyUrl, title }) => {
  return (
    <StyledWorkCaseWithImageListItem
      variants={workItemMotions}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <StyledWorkCaseWithImage>
        <a href={`/${decodeURI(title)}`} title={title}>
          <LazyLoadImage src={image} alt={title} effect="blur" threshold={75} />
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
          {strings.labels.viewCase}
        </Button>
      </StyledWorkCaseWithImage>
    </StyledWorkCaseWithImageListItem>
  );
};

export default WorkCaseWithImage;
