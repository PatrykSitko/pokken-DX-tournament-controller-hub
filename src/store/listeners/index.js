import bindWindowListeners from "./listener/window";
import bindHistoryListener from "./listener/history";
import bindGUUIDListener from "./listener/guuid";
import bindControllersConnectionListener from "./listener/controllers/connection";

const slowLoop = setInterval;

export default (store) => {
  bindHistoryListener(store);
  bindWindowListeners(store);
  bindGUUIDListener(store);
  slowLoop(() => {
    bindControllersConnectionListener(store);
  }, 1000);
};
