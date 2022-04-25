const filterCheck = (item, category, industry) => {
  const categoryLowerCase = category?.toLowerCase();
  const industryLowerCase = industry?.toLowerCase();

  if (
    categoryLowerCase &&
    categoryLowerCase !== 'all' &&
    item.category?.toLowerCase() !== categoryLowerCase
  ) {
    return false;
  }
  if (
    industryLowerCase &&
    industryLowerCase !== 'all' &&
    item.industry?.toLowerCase() !== industryLowerCase
  ) {
    return false;
  }
  return true;
};

export const filterData = (data, category, industry) => {
  if (category === 'all' && industry === 'all') return data;
  const testimonials = data.filter((item) => item.type === 'testimonial');

  let filteredWorks = [];
  data.forEach((item) => {
    if (item.type === 'workCaseNoImageList') {
      const noImagesFiltered = item.data.filter((item) => {
        return filterCheck(item, category, industry);
      });
      if (noImagesFiltered.length > 0) {
        filteredWorks.push({ ...item, data: noImagesFiltered });
      }
    }
    if (item && filterCheck(item, category, industry)) {
      filteredWorks.push(item);
    }
  });

  return [...filteredWorks, ...testimonials];
};

export const transformData = (data) => {
  let transformedData = [];
  let index = 0;

  for (index; index < data.length; index++) {
    const item = data[index];

    let nextItem = data[index + 1];
    if (item.type === 'workCaseNoImage') {
      let WorkCaseNoImageList = [];
      WorkCaseNoImageList.push(item);
      while (nextItem && nextItem.type === 'workCaseNoImage') {
        WorkCaseNoImageList.push(nextItem);
        index++;
        nextItem = data[index + 1];
      }

      transformedData.push({
        id: index,
        type: 'workCaseNoImageList',
        data: WorkCaseNoImageList,
      });
    } else if (item.type === 'workCaseWithImage') {
      transformedData.push({ ...item, id: index });
    } else if (item.type === 'testimonial') {
      transformedData.push({ ...item, id: index });
    }
  }

  return [...transformedData];
};
