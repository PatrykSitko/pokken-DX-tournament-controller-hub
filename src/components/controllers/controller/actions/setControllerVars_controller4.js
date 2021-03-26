export const SET_CONTROLLER_VARS_CONTROLLER_4 =
  "SET_CONTROLLER_VARS_CONTROLLER_4";

export default (state, vars) => ({
  type: SET_CONTROLLER_VARS_CONTROLLER_4,
  payload: { "controller-4": { ...state["controller-4"], ...vars } },
});
