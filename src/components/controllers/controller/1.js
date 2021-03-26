import React from "react";
import { connect } from "react-redux";
import setSelectedControllerId from "./actions/setSelectedControllerId";
import setControllerVars from "./actions/setControllerVars";
import "./controller.scss";

const mapStateToProps = ({ state }) => ({
  state,
  selectedControllerId: state["selected-controller-id"],
  controller: state["controller-1"],
});

const mapDispatchToProps = (dispatch) => ({
  _setSelectedControllerId: (id) => dispatch(setSelectedControllerId(id)),
  setControllerVars: (state, controllerName, vars) =>
    dispatch(setControllerVars(state, controllerName, vars)),
});
function Controller1({
  state,
  selectedControllerId,
  _setSelectedControllerId,
  setControllerVars,
  controller,
}) {
  return (
    <div
      hidden={!controller.connected}
      id="controller1"
      className={`${selectedControllerId === 0 ? "selected" : ""}`}
      onClick={(event) => {
        if (event.button === 0 && selectedControllerId !== 0) {
          _setSelectedControllerId(0);
        }
      }}
    >
      <input
        className="controller-name"
        value={controller.name}
        onChange={(event) =>
          setControllerVars(state, "controller-1", { name: event.target.value })
        }
        onFocus={() => {
          if (selectedControllerId !== 0) {
            _setSelectedControllerId(0);
          }
        }}
      />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Controller1);
