import React from 'react';

import WorkCaseWithImage from '../WorkCaseWithImage/WorkCaseWithImage';
import Testimonial from '../Testimonial/Testimonial';
import WorkCaseNoImageList from '../WorkCaseNoImageList/WorkCaseNoImageList';

const DynamicContent = ({ list }) => {
  const workListTypes = {
    workCaseWithImage: {
      component: WorkCaseWithImage,
    },
    testimonial: {
      component: Testimonial,
    },
    workCaseNoImageList: {
      component: WorkCaseNoImageList,
    },
  };

  const renderList = (works) => {
    let worksList = [];

    works.forEach((work, index) => {
      const workListType = workListTypes[work.type];
      worksList.push(<workListType.component key={index} {...work} />);
    });

    return worksList;
  };

  return renderList(list).map((component) => component);
};

export default DynamicContent;
