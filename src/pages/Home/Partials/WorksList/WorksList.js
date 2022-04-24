import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
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

const WorksList = ({
  works,
  industries,
  categories,
  filterWorks,
  filteredWorks,
}) => {
  const [category, setCategory] = useState(undefined);
  const [industry, setIndustry] = useState(undefined);

  useEffect(() => {
    filterWorks(category, industry);
  }, [category, industry, filterWorks]);

  return (
    <section className="worksSection">
      <Container>
        <StyledFiltersContainer>
          <Select
            label="Show me"
            name="categories"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            options={['all works', ...categories]}
          />
          <Select
            label="in"
            name="industries"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            options={['all industries', ...industries]}
          />
        </StyledFiltersContainer>
        <StyledListSection>
          <DynamicContent list={filteredWorks ? filteredWorks : works} />
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
