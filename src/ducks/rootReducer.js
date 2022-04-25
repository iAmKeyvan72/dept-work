import { combineReducers } from 'redux';

import { default as home } from './home/reducers';
import { default as clients } from './home/clients/reducers';
import { default as categories } from './home/categories/reducers';
import { default as hero } from './home/hero/reducers';
import { default as industries } from './home/industries/reducers';
import { default as works } from './home/works/reducers';
import { default as contactUs } from './home/contactUs/reducers';

export default combineReducers({
  home,
  clients,
  industries,
  categories,
  hero,
  works,
  contactUs,
});
