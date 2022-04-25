import { createSelector } from 'reselect';

export const getHomeLoading = (state) => state.home.loading;
export const getHomeErrors = (state) => state.home.error;

export const getHero = (state) => state.hero;
export const getIndustries = (state) => state.industries;
export const getCategories = (state) => state.categories;
export const getClients = (state) => state.clients;

export const getWorks = (state) => state.works;
export const filteredWorks = createSelector(
  getWorks,
  (works) => works.filteredData
);
