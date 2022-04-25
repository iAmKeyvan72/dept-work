import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Container from '../../../../components/Container/Container';
import DynamicContent from '../../../../components/DynamicContent/DynamicContent';
import Select from '../../../../components/Select/Select';
import { getFilteredWorks } from '../../../../ducks/home/actions';
import {
  filteredWorks,
  getCategories,
  getIndustries,
  getWorks,
} from '../../../../ducks/home/selectors';

import { StyledFiltersContainer, StyledListSection } from './style';

const WorksList = ({ industries, categories, filterWorks, filteredWorks }) => {
  const [search, setSearch] = useSearchParams();

  const [category, setCategory] = useState(search.get('category') || 'all');
  const [industry, setIndustry] = useState(search.get('industry') || 'all');

  useEffect(() => {
    filterWorks(category, industry);
    (category || industry) && setSearch({ category, industry });
  }, [category, industry, filterWorks, setSearch]);

  return (
    <section className="worksSection">
      <Container>
        <StyledFiltersContainer>
          <Select
            label="Show me"
            name="categories"
            value={category || search.get('category')}
            onChange={(e) => setCategory(e.target.value)}
            options={categories}
          />
          <Select
            label="in"
            name="industries"
            value={industry || search.get('industry')}
            onChange={(e) => setIndustry(e.target.value)}
            options={industries}
          />
        </StyledFiltersContainer>
        <StyledListSection>
          <DynamicContent list={filteredWorks} />
        </StyledListSection>
      </Container>
    </section>
  );
};

const mapStateToProps = (state) => ({
  works: getWorks(state),
  industries: getIndustries(state),
  categories: getCategories(state),
  filteredWorks: filteredWorks(state),
});

const mapDispatchToProps = (dispatch) => ({
  filterWorks: (category, industry) =>
    dispatch(getFilteredWorks({ category, industry })),
});

export default connect(mapStateToProps, mapDispatchToProps)(WorksList);
