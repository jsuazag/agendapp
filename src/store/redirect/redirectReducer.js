import { REDIRECT, REDIRECT_DONE } from "./redirectTypes";

const initialState = {
  path: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REDIRECT:
      return {
        path: action.payload,
      };
    case REDIRECT_DONE: 
      return {
          path: ""
      }
    default: return state;
  }
};

export default reducer;
