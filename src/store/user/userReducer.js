import { FETCH_TASKS_FAILURE } from "../tasks/taskTypes";
import {
  FETCH_LOGIN_FAILURE,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_REQUEST,
} from "./userTypes";

const initialState = {
  loading: false,
  isAuth: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_LOGIN_SUCCESS:
      return {
        loading: false,
        error: "",
        isAuth: true,
      };
    case FETCH_TASKS_FAILURE:
      return {
        loading: false,
        error: action.payload,
        isAuth: false,
      };
    default:
      return state;
  }
};

export default reducer;
