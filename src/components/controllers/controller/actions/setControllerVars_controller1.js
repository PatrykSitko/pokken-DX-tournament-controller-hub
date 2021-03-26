export const SET_CONTROLLER_VARS_CONTROLLER_1 =
  "SET_CONTROLLER_VARS_CONTROLLER_1";

export default (state, vars) => ({
  type: SET_CONTROLLER_VARS_CONTROLLER_1,
  payload: { "controller-1": { ...state["controller-1"], ...vars } },
});
