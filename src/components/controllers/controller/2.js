import React from "react";
import { connect } from "react-redux";
import setSelectedControllerId from "./actions/setSelectedControllerId";
import setControllerVars from "./actions/setControllerVars";
import "./controller.scss";

const mapStateToProps = ({ state }) => ({
  state,
  selectedControllerId: state["selected-controller-id"],
  controller: state["controller-2"],
});

const mapDispatchToProps = (dispatch) => ({
  _setSelectedControllerId: (id) => dispatch(setSelectedControllerId(id)),
  setControllerVars: (state, controllerName, vars) =>
    dispatch(setControllerVars(state, controllerName, vars)),
});
function Controller2({
  selectedControllerId,
  _setSelectedControllerId,
  controller,
  setControllerVars,
  state,
}) {
  return (
    <div
      hidden={!controller.connected}
      id="controller2"
      className={`${selectedControllerId === 1 ? "selected" : ""}`}
      onClick={(event) => {
        if (event.button === 0) {
          _setSelectedControllerId(1);
        }
      }}
    >
      <input
        className="controller-name"
        value={controller.name}
        onChange={(event) =>
          setControllerVars(state, "controller-2", { name: event.target.value })
        }
        onFocus={() => {
          if (selectedControllerId !== 1) {
            _setSelectedControllerId(1);
          }
        }}
      />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Controller2);
