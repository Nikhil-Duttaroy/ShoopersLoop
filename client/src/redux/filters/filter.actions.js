import FilterActionTypes from "./fliter.types";

export const searchTermFilter=(value) => ({
    type:FilterActionTypes.searchTermFilter,
    payload:value
})
export const rangeTermFilter1 = (value) => ({
  type: FilterActionTypes.rangeTermFilter1,
  payload: value,
});
export const rangeTermFilter2 = (value) => ({
  type: FilterActionTypes.rangeTermFilter2,
  payload: value,
});
export const colorTermFilter = (value) => ({
  type: FilterActionTypes.colorTermFilter,
  payload: value,
});
export const categoryTermFilter = (value) => ({
  type: FilterActionTypes.categoryTermFilter,
  payload: value,
});

export const clearFilters = () => ({
  type: FilterActionTypes.clearFilters,  
});