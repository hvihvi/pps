import { Reducer } from "redux";
import { createStore } from "redux";
import { Predicate } from "./types";

export type State = {
  filters: Predicate[]; // array predicate
};

const initialState: State = {
  filters: []
};

const reducer: Reducer = (state = initialState, action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case "ADD_FILTER":
      return { ...state, filters: [...state.filters, action.filter] };
    case "RM_FILTER":
      return {
        ...state,
        filters: [
          ...state.filters.filter((f: Predicate) => f === action.filter)
        ]
      };
    default:
      return state;
  }
};

export const store = createStore(reducer, initialState);
