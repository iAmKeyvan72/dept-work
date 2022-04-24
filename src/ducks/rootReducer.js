import { combineReducers } from 'redux';

import homeReducer from './home/reducers';

export default combineReducers({
  home: homeReducer,
});
