import axios from "axios";

export const setText = text => {
  return {
    type: "SET_TEXT",
    value: text
  };
};

export const setNum = num => {
  return {
    type: "SET_NUM",
    value: num
  };
};
