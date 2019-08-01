import axios from "axios";

export const setText = text => {
  return {
    type: "SET_TEXT",
    value: text
  };
};
