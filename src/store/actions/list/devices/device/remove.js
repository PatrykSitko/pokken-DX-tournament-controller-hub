import { REMOVE_DEVICE } from '../../../types';

export default (currentState, index) => {
  const devices = [...currentState.devices];
  devices.splice(index, 1);
  return {
    type: REMOVE_DEVICE,
    payload: { devices },
  };
};
