import React from "react";
import controller from "./image.png";
import "./view.scss";

function ControllerView() {
  return (
    <img
      className="controller-view"
      draggable="false"
      src={controller}
      alt="controller view"
    />
  );
}

export default ControllerView;
