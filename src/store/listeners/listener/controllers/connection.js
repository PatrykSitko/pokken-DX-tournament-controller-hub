import setControllerVarsController1 from "../../../../components/controllers/controller/actions/setControllerVars_controller1";
import setControllerVarsController2 from "../../../../components/controllers/controller/actions/setControllerVars_controller2";
import setControllerVarsController3 from "../../../../components/controllers/controller/actions/setControllerVars_controller3";
import setControllerVarsController4 from "../../../../components/controllers/controller/actions/setControllerVars_controller4";

function fetchConnectedControllers(supported) {
  return fetch("http://localhost:31000/usb/get-connected-controllers-list", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(supported),
  }).then((res) => res.json());
}

function checkIfControllerGotDisconnected(
  devicesList,
  controller1,
  controller2,
  controller3,
  controller4,
  state,
  dispatch,
) {
  const busNumbers = devicesList.map((device) => device.busNumber);
  if (!busNumbers.includes(controller1.connected?.busNumber)) {
    dispatch(setControllerVarsController1(state, { connected: false }));
  }
  if (!busNumbers.includes(controller2.connected?.busNumber)) {
    dispatch(setControllerVarsController2(state, { connected: false }));
  }
  if (!busNumbers.includes(controller3.connected?.busNumber)) {
    dispatch(setControllerVarsController3(state, { connected: false }));
  }
  if (!busNumbers.includes(controller4.connected?.busNumber)) {
    dispatch(setControllerVarsController4(state, { connected: false }));
  }
}

function checkIfControllerGotConnected(
  devicesList,
  controller1,
  controller2,
  controller3,
  controller4,
  state,
  dispatch,
) {
  devicesList.forEach((device, index) => {
    switch (index) {
      case 0:
        if (JSON.stringify(device) !== JSON.stringify(controller1.connected)) {
          dispatch(setControllerVarsController1(state, { connected: device }));
        }
        break;
      case 1:
        if (JSON.stringify(device) !== JSON.stringify(controller2.connected)) {
          dispatch(setControllerVarsController2(state, { connected: device }));
        }
        break;
      case 2:
        if (JSON.stringify(device) !== JSON.stringify(controller3.connected)) {
          dispatch(setControllerVarsController3(state, { connected: device }));
        }
        break;
      case 3:
        if (JSON.stringify(device) !== JSON.stringify(controller4.connected)) {
          dispatch(setControllerVarsController4(state, { connected: device }));
        }
        break;
    }
  });
}

export default async ({ dispatch, getState }) => {
  const { state } = getState();
  const {
    controller: { supported },
    "controller-1": controller1,
    "controller-2": controller2,
    "controller-3": controller3,
    "controller-4": controller4,
  } = state;
  const { devicesList } = await fetchConnectedControllers(supported);

  checkIfControllerGotDisconnected(
    devicesList,
    controller1,
    controller2,
    controller3,
    controller4,
    state,
    dispatch,
  );

  checkIfControllerGotConnected(
    devicesList,
    controller1,
    controller2,
    controller3,
    controller4,
    state,
    dispatch,
  );
};
