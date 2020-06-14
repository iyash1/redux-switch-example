import { initialState } from "../constants/initialState";

const rootReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case "TOGGLE_SWITCH":
      return { switch: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
