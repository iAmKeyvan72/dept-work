export const filterData = (data, category, industry) => {
  const categoryLowerCase = category?.toLowerCase();
  const industryLowerCase = industry?.toLowerCase();

  const testimonials = data.filter((item) => item.type === 'testimonials');
  const filteredWorks = data.filter((item) => {
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
  });

  return [...filteredWorks, ...testimonials];
};
