import * as types from './types';

const initialState = {
  data: [],
  loading: true,
  error: null,
};

const homeReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_HOME_LIST_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
      };
    case types.GET_HOME_LIST_START:
      return {
        ...state,
        loading: true,
      };
    case types.GET_HOME_LIST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case types.GET_FILTERED_WORKS: {
      const { category, industry } = payload;
      const categoryLowerCase = category?.toLowerCase();
      const industryLowerCase = industry?.toLowerCase();

      const works = state.data.find((item) => item.type === 'works');
      const testimonials = works.data.filter(
        (item) => item.type === 'testimonials'
      );
      const filteredWorks = works.data.filter((item) => {
        if (
          categoryLowerCase &&
          item.category?.toLowerCase() !== categoryLowerCase
        ) {
          return false;
        }
        if (
          industryLowerCase &&
          item.industry?.toLowerCase() !== industryLowerCase
        ) {
          return false;
        }
        return true;
      });
      return {
        ...state,
        data: state.data?.map((item) =>
          item.type === 'works'
            ? {
                type: 'works',
                data: works?.data,
                filteredData: [...filteredWorks, ...testimonials],
              }
            : item
        ),
      };
    }

    default:
      return state;
  }
};

export default homeReducer;
