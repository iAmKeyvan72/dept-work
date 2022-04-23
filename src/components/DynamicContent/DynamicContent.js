import React from 'react';

import WorkCaseWithImage from '../WorkCaseWithImage/WorkCaseWithImage';
import WorkCaseNoImage from '../WorkCaseNoImage/WorkCaseNoImage';
import Testimonial from '../Testimonial/Testimonial';

const DynamicContent = ({ list }) => {
  const workListTypes = {
    workCaseWithImage: {
      component: WorkCaseWithImage,
    },
    testimonial: {
      component: Testimonial,
    },
    workCaseNoImage: {
      component: WorkCaseNoImage,
    },
  };

  const renderList = (works) => {
    let worksList = [];

    works.forEach((work, index) => {
      const workListType = workListTypes[work.type];
      worksList.push(<workListType.component {...work} />);
    });

    return worksList;
  };

  return renderList(list).map((component) => component);
};

export default DynamicContent;
