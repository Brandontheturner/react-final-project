import { combineReducers } from "redux";

function text(state = "", action) {
  if (action.type === "SET_TEXT") {
    return action.value;
  }
  return state;
}

function num(state = 0, action) {
  if (action.type === "SET_NUM") {
    return action.value;
  }
  return state;
}

export default combineReducers({
  text,
  num
});
