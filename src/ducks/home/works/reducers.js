import * as types from './types';
import { filterData } from './utils';

const initialState = { data: [], filteredData: [] };

const worksReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SET_WORKS:
      return { ...state, data: payload };

    case types.GET_FILTERED_WORKS: {
      const { category, industry } = payload;
      const filteredData = filterData(state.data, category, industry);
      return { ...state, filteredData };
    }

    default:
      return state;
  }
};

export default worksReducer;
