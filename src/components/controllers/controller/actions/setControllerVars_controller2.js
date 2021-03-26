export const SET_CONTROLLER_VARS_CONTROLLER_2 =
  "SET_CONTROLLER_VARS_CONTROLLER_2";

export default (state, vars) => ({
  type: SET_CONTROLLER_VARS_CONTROLLER_2,
  payload: { "controller-2": { ...state["controller-2"], ...vars } },
});
