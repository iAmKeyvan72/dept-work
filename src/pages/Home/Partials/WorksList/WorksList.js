import React from 'react';
import Container from '../../../../components/Container/Container';
import DynamicContent from '../../../../components/DynamicContent/DynamicContent';
import Select from '../../../../components/Select/Select';

import works from '../../../../mocks/works.json';
import { StyledFiltersContainer, StyledListSection } from './style';

const WorksList = () => {
  const categories = [
    {
      label: 'all work',
      value: 'all',
    },
    {
      label: 'all work',
      value: 'all',
    },
    {
      label: 'all work',
      value: 'all',
    },
  ];

  const industries = [
    {
      label: 'all industries',
      value: 'all',
    },
    {
      label: 'all industries',
      value: 'all',
    },
    {
      label: 'all industries',
      value: 'all',
    },
  ];

  return (
    <section className="worksSection">
      <Container>
        <StyledFiltersContainer>
          <Select label="Show me" name="categories" options={categories} />
          <Select label="in" name="industries" options={industries} />
        </StyledFiltersContainer>
        <StyledListSection>
          <DynamicContent list={works} />
        </StyledListSection>
      </Container>
    </section>
  );
};

export default WorksList;
