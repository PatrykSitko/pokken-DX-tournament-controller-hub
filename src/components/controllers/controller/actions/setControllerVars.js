export const SET_CONTROLLER_VARS = "SET_CONTROLLER_VARS";

export default (state, controllerName, vars) => ({
  type: SET_CONTROLLER_VARS,
  payload: { [controllerName]: { ...state[controllerName], ...vars } },
});
