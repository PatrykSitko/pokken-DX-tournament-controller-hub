export const SET_CONTROLLER_VARS_CONTROLLER_3 =
  "SET_CONTROLLER_VARS_CONTROLLER_3";

export default (state, vars) => ({
  type: SET_CONTROLLER_VARS_CONTROLLER_3,
  payload: { "controller-3": { ...state["controller-3"], ...vars } },
});
