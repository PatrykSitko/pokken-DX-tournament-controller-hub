export const SET_SELECTED_CONTROLLER_ID = "SET_SELECTED_CONTROLLER_ID";

export default (id) => ({
  type: SET_SELECTED_CONTROLLER_ID,
  payload: { "selected-controller-id": id },
});
