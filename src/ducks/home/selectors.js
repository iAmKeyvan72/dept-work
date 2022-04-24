import { createSelector } from 'reselect';

export const getHome = (state) => state.home.data;
export const getHomeLoading = (state) => state.home.loading;
export const getHomeErrors = (state) => state.home.error;

export const getHero = createSelector(getHome, (data) => {
  const hero = data.find((item) => item.type === 'hero');
  return hero.data;
});

export const getWorks = createSelector(getHome, (data) => {
  const works = data.find((item) => item.type === 'works');
  return works.data;
});

export const getClients = createSelector(getHome, (data) => {
  const clients = data.find((item) => item.type === 'clients');
  return clients.data;
});

export const getIndustries = createSelector(getHome, (data) => {
  const industries = data.find((item) => item.type === 'industries');
  return industries.data;
});

export const getCategories = createSelector(getHome, (data) => {
  const categories = data.find((item) => item.type === 'categories');
  return categories.data;
});
