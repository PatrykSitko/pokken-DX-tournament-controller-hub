import React from "react";
import ControllerView from "./view";
import Controller1 from "./controller/1";
import Controller2 from "./controller/2";
import Controller3 from "./controller/3";
import Controller4 from "./controller/4";

function Hub() {
  return [
    <Controller1 key="1" />,
    <Controller2 key="2" />,
    <Controller3 key="3" />,
    <Controller4 key="4" />,
    <ControllerView key="view" />,
  ];
}

export default Hub;
