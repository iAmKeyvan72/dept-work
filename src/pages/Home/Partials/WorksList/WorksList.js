import React from 'react';
import { connect } from 'react-redux';
import Container from '../../../../components/Container/Container';
import DynamicContent from '../../../../components/DynamicContent/DynamicContent';
import Select from '../../../../components/Select/Select';
import {
  getCategories,
  getIndustries,
  getWorks,
} from '../../../../ducks/home/selectors';

import { StyledFiltersContainer, StyledListSection } from './style';

const WorksList = ({ works, industries, categories }) => {
  return (
    <section className="worksSection">
      <Container>
        <StyledFiltersContainer>
          <Select
            label="Show me"
            name="categories"
            options={['all works', ...categories]}
          />
          <Select
            label="in"
            name="industries"
            options={['all industries', ...industries]}
          />
        </StyledFiltersContainer>
        <StyledListSection>
          <DynamicContent list={works} />
        </StyledListSection>
      </Container>
    </section>
  );
};

const mapStateToProps = (state) => ({
  works: getWorks(state),
  industries: getIndustries(state),
  categories: getCategories(state),
});

export default connect(mapStateToProps)(WorksList);
