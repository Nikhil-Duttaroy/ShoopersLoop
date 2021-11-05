import FilterActionTypes from "./fliter.types";

const INITIAL_STATE = {
  searchTermRedux: "",
  rangeTerm1Redux: "",
  rangeTerm2Redux: "",
  colourTermRedux:"",
  categoryTermRedux:"",
  clearFilter:false
};

const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FilterActionTypes.searchTermFilter:
      return {
        ...state,
        clearFilter: false,

        searchTermRedux: action.payload,
      };
    case FilterActionTypes.rangeTermFilter1:
      return {
        ...state,
        clearFilter: false,

        rangeTerm1Redux: action.payload,
      };
    case FilterActionTypes.rangeTermFilter2:
      return {
        ...state,
        clearFilter: false,

        rangeTerm2Redux: action.payload,
      };
    case FilterActionTypes.colorTermFilter:
      return {
        ...state,
        clearFilter: false,

        colourTermRedux: action.payload,
      };
    case FilterActionTypes.categoryTermFilter:
      return {
        ...state,
        clearFilter:false,
        categoryTermRedux: action.payload,
      };
    case FilterActionTypes.clearFilters:
      return {
        ...state,
        searchTermRedux: "",
        rangeTerm1Redux: "",
        rangeTerm2Redux: "",
        colourTermRedux: "",
        categoryTermRedux: "",
        clearFilter:true,
      };

    default:
      return state;
  }
};

export default filterReducer;