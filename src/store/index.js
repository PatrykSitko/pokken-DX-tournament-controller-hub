import { createStore } from "redux";
import bindListeners from "./listeners";
import configuration from "./configuration";

const [reducers, enhancers] = configuration;

const store = createStore(reducers, enhancers);

bindListeners(store);

export default store;
