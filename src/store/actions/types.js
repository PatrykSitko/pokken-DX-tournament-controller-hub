import { SET_SELECTED_CONTROLLER_ID } from "../../components/controllers/controller/actions/setSelectedControllerId";
import { SET_CONTROLLER_VARS } from "../../components/controllers/controller/actions/setControllerVars";
import { SET_CONTROLLER_VARS_CONTROLLER_1 } from "../../components/controllers/controller/actions/setControllerVars_controller1";
import { SET_CONTROLLER_VARS_CONTROLLER_2 } from "../../components/controllers/controller/actions/setControllerVars_controller2";
import { SET_CONTROLLER_VARS_CONTROLLER_3 } from "../../components/controllers/controller/actions/setControllerVars_controller3";
import { SET_CONTROLLER_VARS_CONTROLLER_4 } from "../../components/controllers/controller/actions/setControllerVars_controller4";

export const WINDOW_RESIZED = "WINDOW_RESIZED";
export const SET_SYSTEM_GUUID = "SET_SYSTEM_GUUID";
export const REMOVE_DEVICE = "REMOVE_DEVICE";
export const ADD_DEVICE = "ADD_DEVICE";

export default [
  SET_SELECTED_CONTROLLER_ID,
  SET_CONTROLLER_VARS,
  SET_CONTROLLER_VARS_CONTROLLER_1,
  SET_CONTROLLER_VARS_CONTROLLER_2,
  SET_CONTROLLER_VARS_CONTROLLER_3,
  SET_CONTROLLER_VARS_CONTROLLER_4,
  WINDOW_RESIZED,
  SET_SYSTEM_GUUID,
  REMOVE_DEVICE,
  ADD_DEVICE,
];
