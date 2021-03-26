import { combineReducers } from "redux";
import actions from "./actions/types";
import initialStateJSON from "./initial.state.json";

export const initialState = initialStateJSON.state;

export const stateReducer = (
  state = initialState,
  { type: currentAction, payload },
) => {
  if (payload && actions.includes(currentAction)) {
    return { ...state, ...payload };
  }
  return state;
};

export const initialRouterState = initialStateJSON.router;

export const routerReducer = (
  router = initialRouterState,
  { type: action, payload },
) => (action === "ROUTER/LOCATION_CHANGE" ? { ...router, ...payload } : router);

export default combineReducers({ state: stateReducer, router: routerReducer });
