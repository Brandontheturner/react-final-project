import { combineReducers } from "redux";

function text(state = "", action) {
  if (action.type === "SET_TEXT") {
    return action.value;
  }
  return state;
}

export default combineReducers({
  text
});
