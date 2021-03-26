import { ADD_DEVICE } from '../../../types';

export default (currentState, device) => {
  const devices = [...currentState.devices];
  devices.push(device);
  return {
    type: ADD_DEVICE,
    payload: { devices },
  };
};
