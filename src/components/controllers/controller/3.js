import React from "react";
import { connect } from "react-redux";
import setSelectedControllerId from "./actions/setSelectedControllerId";
import setControllerVars from "./actions/setControllerVars";
import "./controller.scss";

const mapStateToProps = ({ state }) => ({
  state,
  selectedControllerId: state["selected-controller-id"],
  controller: state["controller-3"],
});

const mapDispatchToProps = (dispatch) => ({
  _setSelectedControllerId: (id) => dispatch(setSelectedControllerId(id)),
  setControllerVars: (state, controllerName, vars) =>
    dispatch(setControllerVars(state, controllerName, vars)),
});
function Controller3({
  selectedControllerId,
  _setSelectedControllerId,
  controller,
  setControllerVars,
  state,
}) {
  return (
    <div
      hidden={!controller.connected}
      id="controller3"
      className={`${selectedControllerId === 2 ? "selected" : ""}`}
      onClick={(event) => {
        if (event.button === 0) {
          _setSelectedControllerId(2);
        }
      }}
    >
      <input
        className="controller-name"
        value={controller.name}
        onChange={(event) =>
          setControllerVars(state, "controller-3", { name: event.target.value })
        }
        onFocus={() => {
          if (selectedControllerId !== 2) {
            _setSelectedControllerId(2);
          }
        }}
      />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Controller3);
