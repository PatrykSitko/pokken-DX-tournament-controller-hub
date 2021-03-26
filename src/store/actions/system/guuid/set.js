import { SET_SYSTEM_GUUID } from '../../types';

export default (guuid) => ({
  type: SET_SYSTEM_GUUID,
  payload: { GUUID: guuid },
});
