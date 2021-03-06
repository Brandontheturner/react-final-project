import { createStore } from "redux";
import state from "./state";
import reducers from "./Redux/reducers";

const store = createStore(
  reducers,
  state,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
